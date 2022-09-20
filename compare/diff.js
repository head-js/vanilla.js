function Change(name, from, to) {
  this.name = name;
  this.from = from ;
  this.to = to;

  return this;
}


function Entity(id, entity, names) {
  this.id = id;

  this.attributes = {}; // HashMap<String, String>, 目前仅支持单值对比
  for (let i = 0; i < names.length; i += 1) {
    const n = names[i]
    this.attributes[n] = entity[n] || '';
  }

  this.changes = [];

  return this;
}


function _compare(prev/* Entity */, next/* Entity */, attributes/* List<String> */) /* List<Change> */ {
  const entity = new Entity(prev.id, {}, []);

  for (let i = 0; i < attributes.length; i += 1) {
    const name = attributes[i];
    const from = prev.attributes[name] || '';
    const to = next.attributes[name] || '';

    if (from !== to) {
      entity.changes.push(new Change(name, from, to));
    } else {
      entity.attributes[name] = to;
    }
  }

  return entity;
}


module.exports = function diff(prev/*: List<HashMap<String, String>> */, next/*: List<HashMap<String, String>> */, attributes/*: List<String> */, idf/*: function */) {
  const prevEntities = [];
  for (let p = 0; p < prev.length; p += 1) {
    const pe = prev[p];
    const id = idf ? idf(pe) : pe.id;
    prevEntities.push(new Entity(id, pe, attributes));
  }
  prevEntities.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    } else if (a.id === b.id) {
      return 0;
    } else if (a.id > b.id) {
      return 1;
    }
  });

  const nextEntities = [];
  for (let n = 0; n < next.length; n += 1) {
    const ne = next[n];
    const id = idf ? idf(ne) : ne.id;
    nextEntities.push(new Entity(id, ne, attributes));
  }
  nextEntities.sort(function (a, b) {
    if (a.id < b.id) {
      return -1;
    } else if (a.id === b.id) {
      return 0;
    } else if (a.id > b.id) {
      return 1;
    }
  });

  const toInsert = []; /* List<Entity> */
  const toDelete = []; /* List<Entity> */
  const toUpdate = []; /* List<Entity> */

  let cursorPrev = 0;
  let cursorNext = 0;
  let entityPrev;
  let entityNext;

  while (cursorPrev <= prevEntities.length && cursorNext < nextEntities.length) {
    if (cursorPrev < prevEntities.length) {
      entityPrev = prevEntities[cursorPrev];
    } else {
      entityPrev = null;
    }
    if (cursorNext < nextEntities.length) {
        entityNext = nextEntities[cursorNext];
    } else {
      entityNext = null;
    }
    // console.log('E', cursorPrev, cursorNext, entityPrev, entityNext);throw new Error('DEBUGGER');

    if (entityNext == null) {
      toDelete.push(entityPrev);
      cursorPrev += 1;
    } else if (entityPrev == null) {
      toInsert.push(entityNext);
      cursorNext += 1;
    } else if (entityPrev.id < entityNext.id) {
      toDelete.push(entityPrev);
      cursorPrev += 1;
    } else if (entityPrev.id === entityNext.id) {
      const change = _compare(entityPrev, entityNext, attributes);

      if (change.changes.length) {
        toUpdate.push(change);
      }

      cursorPrev += 1;
      cursorNext += 1;
    } else if (entityPrev.id > entityNext.id) {
        toInsert.push(entityNext);
        cursorNext += 1;
    }
  }

  return [toInsert, toDelete, toUpdate];
}

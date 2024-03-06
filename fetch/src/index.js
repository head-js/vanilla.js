import get from './get';
import post from './post';
import put from './put';
import del from './del';


const $fetch = {
  get,
  post,
  put,
  'delete': del, // eslint-disable-line quote-props
};


export default $fetch;

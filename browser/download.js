// https://id.javascript.info/blob

function download(filename, content, type) {
  var blob = new Blob([ content ], { type: type });
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

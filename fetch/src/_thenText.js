export default function _thenText(resolve, reject) {
  return (resp) => {
    const { status } = resp;

    if (resp.ok) {
      resp.text()
        .then((t) => {
          resolve(t ? t : ''); // eslint-disable-line no-unneeded-ternary
        });
    } else {
      resp.text()
        .then((t) => {
          reject(t ? t : `status: ${status}`); // eslint-disable-line no-unneeded-ternary
        });
    }
  };
}

export default function _then(resolve, reject) {
  return (resp) => {
    const { status } = resp;

    if (resp.ok) {
      resp.text()
        .then((t) => {
          resolve(t ? JSON.parse(t) : { status });
        });
    } else {
      resp.text()
        .then((t) => {
          reject(t ? JSON.parse(t) : { status });
        });
    }
  };
}

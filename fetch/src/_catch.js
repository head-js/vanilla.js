export default function _catch(resolve, reject) {
  return (err) => {
    reject(err);
  };
}

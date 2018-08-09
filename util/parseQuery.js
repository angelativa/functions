const parseQuery = (hash) => {
  hash = hash ? hash : location.hash;
  hash = hash.substring(1);
  let result = {};
  if (hash) {
    let hashJson = hash.split('&');
    hashJson.forEach((item) => {
      item = item.split('=');
      result[ item[ 0 ] ] = decodeURIComponent(item[ 1 ]);
    });
  }
  return result;
};

module.exports = parseQuery;

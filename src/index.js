module.exports = function check(str, bracketsConfig) {
  const pairs = bracketsConfig.map((bracketPair) => bracketPair.join(""));
  let strLength = 0;

  while (str.length !== strLength) {
    strLength = str.length;
    pairs.forEach((pair) => {
      str = str.replace(pair, "");
    });
  }

  return strLength === 0;
};

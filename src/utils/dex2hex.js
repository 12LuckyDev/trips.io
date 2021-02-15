const populateWithZeros = (length) => new Array(length + 1).join("0");

const dec2hex = (dec, minLength) => {
  const result = parseInt(dec).toString(16);
  if (!!minLength && minLength > result.length) {
    return `${populateWithZeros(minLength - result.length)}${result}`;
  }
  return result;
};

export default dec2hex;

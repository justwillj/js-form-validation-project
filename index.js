const containLetters = (value) => {
  return /[a-zA-Z]/.test(value);
};
const containNumber = (value) => {
  return /[0-9]/.test(value);
};
const whiteSpaceCheck = (value) => {
  return /\s/.test(value);
};
const specialCharCheck = (value) => {
  let specialCharacter = /(?=.*[!@#$%^&*])/;
  return specialCharacter.test(value);
};

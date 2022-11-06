/**
 * Checks through the input value too see if it contains letters or not
 * @param {string} value - The input string of the form the user is working on
 * @returns - Gives a true of false value based off if there is letters or not
 */
const containLetters = (value) => {
  return /[a-zA-Z]/.test(value);
};
/**
 * Checks through the input value too see if it contains number or not
 * @param {number} value - The input string of the form the user is working on
 * @returns - Gives a true of false value based off if there is numbers or not
 */
const containNumber = (value) => {
  return /[0-9]/.test(value);
};
/**
 * Checks through the input value too see if it white spaces or not
 * @param {string} value - The input string of the form the user is working on
 * @returns - Gives a true of false value based off if there is numbers or not
 */
const whiteSpaceCheck = (value) => {
  return /\s/.test(value);
};
/**
 * Checks through the input value too see if it has special characters or not
 * @param {string} value - The input string of the form the user is working on
 * @returns  - Gives a true of false value based off if there is special characters or not
 */
const specialCharCheck = (value) => {
  let specialCharacter = /(?=.*[!@#$%^&*])/;
  return specialCharacter.test(value);
};

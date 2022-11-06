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

const storeVariables = () => {
  // create error elements
  let errorUlOne = document.createElement("ul");
  let errorUlTwo = document.createElement("ul");
  let errorUlThree = document.createElement("ul");
  //error messages for each of the different functions
  let errorRequiredCheck = document.createElement("li");
  let errorLetterCheck = document.createElement("li");
  let errorUserLetterCheck = document.createElement("li");

  const requiredCheck = (value, errorDiv) => {
    if (whiteSpaceCheck(value) === true || value === "") {
      errorRequiredCheck.innerHTML =
        "Required fields must have a value that is not empty or whitespace.";
      errorUlOne.appendChild(errorRequiredCheck);
      errorDiv.appendChild(errorUlOne);
      event.preventDefault();
    }
  };

  const letterCheck = (value, errorDiv) => {
    if (containLetters(value) === false && value !== "") {
      errorLetterCheck.innerHTML =
        "Alphabetic fields must be a series of alphabetic characters.";
      errorUlTwo.appendChild(errorLetterCheck);
      errorDiv.appendChild(errorUlTwo);
      event.preventDefault();
    }
  };

  const userNameletterCheck = (value, errorDiv) => {
    if (containLetters(value) === false && value !== "") {
      errorUserLetterCheck.innerHTML =
        "Username fields must contain only alphanumeric characters.";
      errorUlThree.appendChild(errorUserLetterCheck);
      errorDiv.appendChild(errorUlThree);
      event.preventDefault();
    }
  };
};

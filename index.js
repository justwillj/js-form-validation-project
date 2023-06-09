/**
 * Checks through the input value too see if it has white spaces or not
 * @param {string} value - The input string of the form the user is working on
 * @returns {boolean} - Gives a true of false value based off if there is numbers or not
 */
const whiteSpaceCheck = (value) => {
  return /\s/.test(value);
};
/**
 * Checks through the input value to see if it has special characters or not
 * @param {string} value - The input string of the form the user is working on
 * @returns {boolean} - Gives a true of false value based off if there is special characters or not
 */
const specialCharCheck = (value) => {
  let specialCharacter = /(?=.*[!@#$%^&*])/;
  return specialCharacter.test(value);
};
/**
 * Checks through the input value to see if it contains alphanumeric or not
 * @param {string} value - The input string of the form the user is working on
 * @returns {boolean} - Gives a true of false value based off if there is alphanumeric value or not
 */
const containAlphanumeric = (value) => {
  return /^[a-z0-9]+$/i.test(value);
};

/**
 * Stores all of our ul and li elements so errors are not using global variables
 */
const storeVariables = () => {
  // create error ul elements
  let errorUlRequired = document.createElement("ul");
  let errorUlLetter = document.createElement("ul");
  let errorUlUserLetter = document.createElement("ul");
  let errorUlNumber = document.createElement("ul");
  let errorUlUserLength = document.createElement("ul");
  let errorUlLength = document.createElement("ul");
  let errorUlPassword = document.createElement("ul");
  let errorUlPhone = document.createElement("ul");
  let errorUlDate = document.createElement("ul");
  //error messages for each of the different validation functions
  let errorRequiredCheck = document.createElement("li");
  let errorLetterCheck = document.createElement("li");
  let errorUserLetterCheck = document.createElement("li");
  let errorNumberCheck = document.createElement("li");
  let errorUserLengthCheck = document.createElement("li");
  let errorLengthCheck = document.createElement("li");
  let errorPasswordCheck = document.createElement("li");
  let errorPhoneCheck = document.createElement("li");
  let errorDateCheck = document.createElement("li");

  /**
   * Checks the input value of the required class and checks to see if it contains empty string or white spaces in it
   * @param {string} value - The input string value for the input box the user is working on
   * @param {HTMLElement} errorDiv - The error div above the form the user is working on
   */
  const requiredCheck = (value, errorDiv) => {
    if (whiteSpaceCheck(value) === true || value === "") {
      errorRequiredCheck.innerHTML =
        "Required fields must have a value that is not empty or whitespace.";
      errorUlRequired.appendChild(errorRequiredCheck);
      errorDiv.appendChild(errorUlRequired);
      event.preventDefault();
    }
  };

  /**
   * Checks the input value of the alphabetic class to make sure it contains letters or not
   * @param {string} value - The input string value for the input box the user is working on
   * @param {HTMLElement} errorDiv - The error div above the form the user is working on
   */
  const letterCheck = (value, errorDiv) => {
    if (
      (!/^[a-zA-Z]*$/g.test(value) && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorLetterCheck.innerHTML =
        "Alphabetic fields must be a series of alphabetic characters.";
      errorUlLetter.appendChild(errorLetterCheck);
      errorDiv.appendChild(errorUlLetter);
      event.preventDefault();
    }
  };

  /**
   * Checks the input value of the username class to make sure it only has alphanumeric values
   * @param {string} value - The input string value for the input box the user is working on
   * @param {HTMLElement} errorDiv - The error div above the form the user is working on
   */
  const userNameLetterCheck = (value, errorDiv) => {
    if (
      (containAlphanumeric(value) === false && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorUserLetterCheck.innerHTML =
        "Username fields must contain only alphanumeric characters.";
      errorUlUserLetter.appendChild(errorUserLetterCheck);
      errorDiv.appendChild(errorUlUserLetter);
      event.preventDefault();
    }
  };

  /**
   * Checks the input value of the numeric class to make sure that the value contains numbers
   * @param {string} value - The input string value for the input box the user is working on
   * @param {HTMLElement} errorDiv - The error div above the form the user is working on
   */
  const numberCheck = (value, errorDiv) => {
    if (
      (!/^[0-9]+$/.test(value) && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorNumberCheck.innerHTML =
        "Numeric fields must be a series of numbers.";
      errorUlNumber.appendChild(errorNumberCheck);
      errorDiv.appendChild(errorUlNumber);
      event.preventDefault();
    }
  };

  /**
   * Checks the input value of the username class to make sure its length is greater then 8
   * @param {number} value - the input string value for the input box the user is working on
   * @param {number} number - The length the input needs to be
   * @param {HTMLElement} errorDiv - The error div above the form the user is working on
   */
  const userNameLengthCheck = (value, number, errorDiv) => {
    if (
      (value.length < number && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorUserLengthCheck.innerHTML =
        "Username fields must contain at least 8 characters.";
      errorUlUserLength.appendChild(errorUserLengthCheck);
      errorDiv.appendChild(errorUlUserLength);
      event.preventDefault();
    }
  };

  /**
   * Checks the input length to make sure it is greater the min length attributes for that input
   * @param {number} value - The input value length of characters
   * @param {number} number - The min length attributes in the html page
   * @param {HTMLElement} errorDiv - The error div above the form the user is working on
   */
  const lengthCheck = (value, number, errorDiv) => {
    if (
      (value.length < number && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorLengthCheck.innerHTML =
        "Required_size field lengths must exactly match the minlength attribute of that field.";
      errorUlLength.appendChild(errorLengthCheck);
      errorDiv.appendChild(errorUlLength);
      event.preventDefault();
    }
  };

  /**
   * Checks the input value for the password class to make sure it contains one of the following: Lowercase, Uppercase, Number, Special Character
   * @param {string} value - The input string value for the input box the user is working on
   * @param {HTMLElement} errorDiv - The error div above the form the user is working on
   */
  const passwordCheck = (value, errorDiv) => {
    // Checks for lowercase
    if (
      (value.search(/[a-z]/) < 0 && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorPasswordCheck.innerHTML =
        "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.";
      errorUlPassword.appendChild(errorPasswordCheck);
      errorDiv.appendChild(errorUlPassword);
      event.preventDefault();
      // Checks for uppercase
    } else if (
      (value.search(/[A-Z]/) < 0 && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorPasswordCheck.innerHTML =
        "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.";
      errorUlPassword.appendChild(errorPasswordCheck);
      errorDiv.appendChild(errorUlPassword);
      event.preventDefault();
      // Checks for number
    } else if (
      (value.search(/[0-9]/) < 0 && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorPasswordCheck.innerHTML =
        "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.";
      errorUlPassword.appendChild(errorPasswordCheck);
      errorDiv.appendChild(errorUlPassword);
      event.preventDefault();
      // Checks for special character
    } else if (
      (specialCharCheck(value) === false && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorPasswordCheck.innerHTML =
        "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.";
      errorUlPassword.appendChild(errorPasswordCheck);
      errorDiv.appendChild(errorUlPassword);
      event.preventDefault();
    }
  };

  /**
   * Checks through the input value for the phone class to make sure the format is correct
   * @param {string} value -The input string value for the input box the user is working on
   * @param {HTMLElement} errorDiv - The error div above the form the user is working on
   */
  const phoneNumberCheck = (value, errorDiv) => {
    let phoneCheck = /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/;
    if (
      (!value.match(phoneCheck) && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorPhoneCheck.innerHTML =
        "Phone fields must match the format of XXX-XXX-XXXX.";
      errorUlPhone.appendChild(errorPhoneCheck);
      errorDiv.appendChild(errorUlPhone);
      event.preventDefault();
    }
  };

  /**
   * Checks through the input value for the date class to make sure it matches the correct format
   * @param {string} value - The input string value for the input box the user is working on
   * @param {HTMLElement} errorDiv - The error div above the form the user is working on
   */
  const dateCheck = (value, errorDiv) => {
    let dateCheck = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (
      (dateCheck.test(value) === false && value !== "") ||
      whiteSpaceCheck(value) === true
    ) {
      errorDateCheck.innerHTML =
        "Date fields must match the format of XX/XX/XXXX.";
      errorUlDate.appendChild(errorDateCheck);
      errorDiv.appendChild(errorUlDate);
      event.preventDefault();
    }
  };

  // Detect which form is the closest to the validate button the user clicks on
  //https://stackoverflow.com/questions/70427235/how-to-target-a-specific-form-on-submit-if-multiple-forms-are-present-with-same
  document.querySelectorAll("input[type=submit]").forEach(
    /**
     * Grabs the closest form of the validate button the user clicks on
     */
    (formGrab = (element) => {
      element.addEventListener(
        "click",
        /**
         * Runs all of the different validation checks on each of the classes when the user click on a validate button
         */
        (formAdd = (element) => {
          //Grabs the closest form to the validate button
          let currentForm = element.target.closest("form");

          //grabs classes of that form the user clicks on
          let testRequired = currentForm.querySelectorAll(".required");
          let testAlphabetic = currentForm.querySelectorAll(".alphabetic");
          let testUserName = currentForm.querySelectorAll(".username");
          let testPassword = currentForm.querySelectorAll(".password");
          let testNumeric = currentForm.querySelectorAll(".numeric");
          let testSize = currentForm.querySelectorAll(".required_size");
          let testPhone = currentForm.querySelectorAll(".phone");
          let testDate = currentForm.querySelectorAll(".date");

          // Displays the error messages into the current placement
          let formError = currentForm.parentElement.querySelector(".errors");

          //Loops through the required class and run the validation test on it
          for (let required of testRequired) {
            let values = required.value;
            requiredCheck(values, formError);
          }

          //Loops through the alphabetic class and run the validation test on it
          for (let alphabetic of testAlphabetic) {
            let values = alphabetic.value;

            letterCheck(values, formError);
          }

          //Loops through the username class and run the validation test on it
          for (let username of testUserName) {
            let values = username.value;
            userNameLengthCheck(values, 8, formError);
            userNameLetterCheck(values, formError);
          }

          //Loops through the password class and run the validation test on it
          for (let password of testPassword) {
            let values = password.value;
            passwordCheck(values, formError);
          }

          //Loops through the numeric class and run the validation test on it
          for (let numeric of testNumeric) {
            let values = numeric.value;
            numberCheck(values, formError);
          }

          //Loops through the required_size class and run the validation test on it
          for (let length of testSize) {
            let minLength = length.getAttribute("minlength");
            let values = length.value;
            lengthCheck(values, minLength, formError);
          }

          //Loops through the phone class and run the validation test on it
          for (let phone of testPhone) {
            let values = phone.value;
            phoneNumberCheck(values, formError);
          }

          //Loops through the date class and run the validation test on it
          for (let date of testDate) {
            let values = date.value;
            dateCheck(values, formError);
          }
        })
      );
    })
  );
};
storeVariables();

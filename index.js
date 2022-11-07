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
  let errorUlFour = document.createElement("ul");
  let errorUlFive = document.createElement("ul");
  let errorUlSix = document.createElement("ul");
  let errorUlSeven = document.createElement("ul");
  let errorUlEight = document.createElement("ul");
  let errorUlNine = document.createElement("ul");
  //error messages for each of the different functions
  let errorRequiredCheck = document.createElement("li");
  let errorLetterCheck = document.createElement("li");
  let errorUserLetterCheck = document.createElement("li");
  let errorNumberCheck = document.createElement("li");
  let errorUserLengthCheck = document.createElement("li");
  let errorLengthCheck = document.createElement("li");
  let errorPasswordCheck = document.createElement("li");
  let errorPhoneCheck = document.createElement("li");
  let errorDateCheck = document.createElement("li");
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

  const userNameLetterCheck = (value, errorDiv) => {
    if (containLetters(value) === false && value !== "") {
      errorUserLetterCheck.innerHTML =
        "Username fields must contain only alphanumeric characters.";
      errorUlThree.appendChild(errorUserLetterCheck);
      errorDiv.appendChild(errorUlThree);
      event.preventDefault();
    }
  };

  const numberCheck = (value, errorDiv) => {
    if (containNumber(value) === false && value !== "") {
      errorNumberCheck.innerHTML =
        "Numeric fields must be a series of numbers.";
      errorUlFour.appendChild(errorNumberCheck);
      errorDiv.appendChild(errorUlFour);
      event.preventDefault();
    }
  };

  const userNameLengthCheck = (value, number, errorDiv) => {
    if (value.length < number && value !== "") {
      errorUserLengthCheck.innerHTML =
        "Username fields must contain at least 8 characters.";
      errorUlFive.appendChild(errorUserLengthCheck);
      errorDiv.appendChild(errorUlFive);
      event.preventDefault();
    }
  };

  const lengthCheck = (value, number, errorDiv) => {
    if (value.length < number && value !== "") {
      errorLengthCheck.innerHTML =
        "Required_size field lengths must exactly match the minlength attribute of that field.";
      errorUlSix.appendChild(errorLengthCheck);
      errorDiv.appendChild(errorUlSix);
      event.preventDefault();
    }
  };

  const passwordCheck = (value, errorDiv) => {
    if (value.search(/[a-z]/) < 0 && value !== "") {
      errorPasswordCheck.innerHTML =
        "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.";
      errorUlSeven.appendChild(errorPasswordCheck);
      errorDiv.appendChild(errorUlSeven);
      event.preventDefault();
      // Checks for uppercase
    } else if (value.search(/[A-Z]/) < 0 && value !== "") {
      errorPasswordCheck.innerHTML =
        "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.";
      errorUlSeven.appendChild(errorPasswordCheck);
      errorDiv.appendChild(errorUlSeven);
      event.preventDefault();
      // Checks for number
    } else if (value.search(/[0-9]/) < 0 && value !== "") {
      errorPasswordCheck.innerHTML =
        "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.";
      errorUlSeven.appendChild(errorPasswordCheck);
      errorDiv.appendChild(errorUlSeven);
      event.preventDefault();
      // Checks for special character
    } else if (specialCharCheck(value) === false && value !== "") {
      errorPasswordCheck.innerHTML =
        "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.";
      errorUlSeven.appendChild(errorPasswordCheck);
      errorDiv.appendChild(errorUlSeven);
      event.preventDefault();
    }
  };

  const phoneNumberCheck = (value, errorDiv) => {
    let phoneCheck = /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/;
    if (!value.match(phoneCheck) && value !== "") {
      errorPhoneCheck.innerHTML =
        "Phone fields must match the format of XXX-XXX-XXXX.";
      errorUlEight.appendChild(errorPhoneCheck);
      errorDiv.appendChild(errorUlEight);
      event.preventDefault();
    }
  };

  const dateCheck = (value, errorDiv) => {
    let dateCheck = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (dateCheck.test(value) === false && value !== "") {
      errorDateCheck.innerHTML =
        "Date fields must match the format of XX/XX/XXXX.";
      errorUlNine.appendChild(errorDateCheck);
      errorDiv.appendChild(errorUlNine);
      event.preventDefault();
    }
  };

  const formValidationCheck = (event) => {};

  document.querySelectorAll("input[type=submit]").forEach(function (element) {
    element.addEventListener("click", function (element) {
      let currentForm = element.target.closest("form");
      currentForm.addEventListener("submit", formValidationCheck);

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
      let formError =
        currentForm.parentElement.getElementsByClassName("errors")[0];

      //Loops through the required class and run the validation test on it
      for (let i = 0; i < testRequired.length; i++) {
        let values = testRequired[i].value;
        requiredCheck(values, formError);
      }

      //Loops through the alphabetic class and run the validation test on it
      for (let i = 0; i < testAlphabetic.length; i++) {
        let values = testAlphabetic[i].value;
        letterCheck(values, formError);
      }

      //Loops through the username class and run the validation test on it
      for (let i = 0; i < testUserName.length; i++) {
        let values = testUserName[i].value;
        userNameLengthCheck(values, 8, formError);
        userNameLetterCheck(values, formError);
      }

      //Loops through the password class and run the validation test on it
      for (let i = 0; i < testPassword.length; i++) {
        let values = testPassword[i].value;
        passwordCheck(values, formError);
      }

      //Loops through the numeric class and run the validation test on it
      for (let i = 0; i < testNumeric.length; i++) {
        let values = testNumeric[i].value;
        numberCheck(values, formError);
      }

      //Loops through the required_size class and run the validation test on it
      for (let i = 0; i < testSize.length; i++) {
        let minLength = testSize[i].getAttribute("minlength");
        let values = testSize[i].value;
        lengthCheck(values, minLength, formError);
      }

      //Loops through the phone class and run the validation test on it
      for (let i = 0; i < testPhone.length; i++) {
        let values = testPhone[i].value;
        phoneNumberCheck(values, formError);
      }
    });
  });
};
storeVariables();

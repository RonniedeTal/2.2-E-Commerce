// Exercise 6
function validate() {
  // Get the input fields
  let submit = document.getElementById("btn");
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  let fAddress = document.getElementById("fAddress");
  let fLastN = document.getElementById("fLastN");
  let fPassword = document.getElementById("fPassword");
  let fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  let errorAddress = document.getElementById("errorAddress");
  let errorLastN = document.getElementById("errorLastN");
  let errorPassword = document.getElementById("errorPassword");
  let errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email
  const emailReg = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const pattern = new RegExp("^[A-Z]+$", "i");

  const validateInputs = () => {
    if (
      fName.value == "" ||
      fName.value == null ||
      fName.value.length < 3 ||
      !pattern.test(fName.value)
    ) {
      fName.style.border = "1px solid red";
      errorName.classList.add("invalid-feedback");
      errorName.style.display = "block";
    } else {
      fName.style.border = "1px solid green";
      errorName.classList.remove("invalid-feedback");
      errorName.style.display = "none";
    }

    if (!emailReg.test(fEmail.value)) {
      fEmail.style.border = "1px solid red";
      errorEmail.classList.add("invalid-feedback");
      errorEmail.style.display = "block";
    } else {
      fEmail.style.border = "1px solid green";
      errorEmail.classList.remove("invalid-feedback");
      errorEmail.style.display = "none";
    }

    if (
      fAddress.value == "" ||
      fAddress.value == null ||
      fAddress.value.length < 3
    ) {
      fAddress.style.border = "1px solid red";
      errorAddress.classList.add("invalid-feedback");
      errorAddress.style.display = "block";
    } else {
      fAddress.style.border = "1px solid green";
      errorAddress.classList.remove("invalid-feedback");
      errorAddress.style.display = "none";
    }

    if (
      fLastN.value == "" ||
      fLastN.value == null ||
      fLastN.value.length < 3 ||
      !pattern.test(fLastN.value)
    ) {
      fLastN.style.border = "1px solid red";
      errorLastN.classList.add("invalid-feedback");
      errorLastN.style.display = "block";
    } else {
      fLastN.style.border = "1px solid green";
      errorLastN.classList.remove("invalid-feedback");
      errorLastN.style.display = "none";
    }

    if (!passwordReg.test(fPassword.value)) {
      fPassword.style.border = "1px solid red";
      errorPassword.classList.add("invalid-feedback");
      errorPassword.style.display = "block";
    } else {
      fPassword.style.border = "1px solid green";
      errorPassword.classList.remove("invalid-feedback");
      errorPassword.style.display = "none";
    }

    if (fPhone.value.length < 9 || fPhone.value.length > 9) {
      fPhone.style.border = "1px solid red";
      errorPhone.classList.add("invalid-feedback");
      errorPhone.style.display = "block";
    } else {
      fPhone.style.border = "1px solid green";
      errorPhone.classList.remove("invalid-feedback");
      errorPhone.style.display = "none";
    }
  };

  document.addEventListener("click", (e) => {
    if (e.target === submit) {
      e.preventDefault();
      validateInputs();
    }
  });
}

const APP = {
    init () {
        APP.addListeners();
    },
    addListeners(){
        let nameInput = document.querySelector("#name");
        let emailInput = document.querySelector("#email");
        let subjectInput = document.querySelector("#subject");
        let textareaInput = document.querySelector("#textarea");

        nameInput.addEventListener("change", APP.testName);
        emailInput.addEventListener("change", APP.testEmail);
        subjectInput.addEventListener("change", APP.testSubject);
        textareaInput.addEventListener("change", APP.testTextArea);

    },
    testName(ev) {
      let nameValidity = ev.target;
      nameValidity.setCustomValidity("");
      let currently = nameValidity.checkValidity();
      if (currently) {
        let nameRegEx = /^[a-zA-Z]{2,}(\s?[a-zA-Z]+)?$/;
        if(nameRegEx.test(nameValidity.value.trim()) === false) {
          let customError = document.querySelector(".errMessage");
          customError.textContent = 'Your entered name is not valid';
          customError.style.color = 'red';
          nameValidity.setCustomValidity("At least 2 leters, without any numbers or special characters");
          nameValidity.style.borderColor = 'red';
          nameValidity.reportValidity();
        }
        if (nameValidity.value.trim().match(nameRegEx)) {
            nameValidity.style.borderColor = "#e1e1e1";
            let customError = document.querySelector(".errMessage");
            customError.textContent = "";
        }
      }  
    },
    testEmail(ev) {
      let emailValidity = ev.target;
      emailValidity.setCustomValidity("");
      let currently = emailValidity.checkValidity();
      if (currently) {
        let emailRegEx = new RegExp("@gmail.com$", "i");
        if(emailRegEx.test(emailValidity.value) === false) {
          let customError =document.querySelector(".errMessage1");
          customError.textContent = 'Your entered email is not valid';
          customError.style.color = 'red';
          emailValidity.setCustomValidity("Please specify gmail.com");
          emailValidity.style.borderColor = 'red';
          emailValidity.reportValidity();
        }
        if (emailValidity.value.match(emailRegEx)) {
          emailValidity.style.borderColor = "#e1e1e1";
          let customError = document.querySelector(".errMessage1");
          customError.textContent = "";
        }
      }
    },
    testSubject(ev) {
      let subjectValidity = ev.target;
      subjectValidity.setCustomValidity("");
      let currently = subjectValidity.checkValidity();
      if (currently) {
        let subjectRegEx = /^[a-zA-Z]{2,}(\s?[a-zA-Z]+)?$/;
        if (subjectRegEx.test(subjectValidity.value.trim()) === false) {
          let customError = document.querySelector(".errMessage2");
          customError.textContent = 'Your entered subject is not valid';
          customError.style.color = 'red';
          subjectValidity.setCustomValidity("At least 2 leters, without any numbers or special characters");
          subjectValidity.style.borderColor = 'red';
          subjectValidity.reportValidity();
        }
        if (subjectValidity.value.trim().match(subjectRegEx)) {
          subjectValidity.style.borderColor = "#e1e1e1";
          let customError = document.querySelector(".errMessage2");
          customError.textContent = "";
        }
      }
    },
    testTextArea(ev) {
      let textAreaValidity = ev.target;
      textAreaValidity.setCustomValidity("");
      let currently = textAreaValidity.checkValidity();
      if (currently) {
        let textAreaRegEx = /[a-zA-Z]{2,}(\s?[a-zA-Z0-9, ,.?/!@#\$%\^&\*]+)?/;
        if (textAreaRegEx.test(textAreaValidity.value.trim()) === false) {
          let customError = document.querySelector(".errMessage3");
          customError.textContent = 'Your entered textarea is not valid';
          customError.style.color = 'red';
          textAreaValidity.setCustomValidity("At least 2 leters");
          textAreaValidity.style.borderColor = 'red';
          textAreaValidity.reportValidity();
        }
        if (textAreaValidity.value.trim().match(textAreaRegEx)) {
          textAreaValidity.style.borderColor = "#e1e1e1";
          let customError = document.querySelector(".errMessage3");
          customError.textContent = "";
        }
      }
    }
}

document.addEventListener("DOMContentLoaded", APP.init);


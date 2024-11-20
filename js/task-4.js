"use strict";

function addSubmitFormEvent() {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
      email: form.elements.email.value.trim(),
      password: form.elements.password.value.trim(),
    };

    if (!data.email || !data.password) {
      window.alert("All form fields must be filled in");
      return;
    }

    console.log(data);
    form.reset();
  });
}

addSubmitFormEvent();

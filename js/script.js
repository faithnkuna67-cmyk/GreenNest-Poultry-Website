const form = document.getElementById("enquiryForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const message = document.getElementById("formMessage");

    if (!form.checkValidity()) {
      message.textContent =
        "Please complete all required fields correctly.";

      form.reportValidity();
      return;
    }

    message.textContent =
      "Thank you. Your enquiry has been captured for this academic project.";

    message.setAttribute("tabindex", "-1");
    message.focus();

    form.reset();
  });
}

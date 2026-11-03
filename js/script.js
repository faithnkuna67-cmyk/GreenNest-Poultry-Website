document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // 1. ENQUIRY FORM VALIDATION AND AJAX SUBMISSION
  // ==========================================

  const enquiryForm = document.getElementById("enquiryForm");

  if (enquiryForm) {

    enquiryForm.addEventListener("submit", async function (event) {

      event.preventDefault();

      const message = document.getElementById("formMessage");

      if (!enquiryForm.checkValidity()) {
        message.textContent =
          "Please complete all required fields correctly.";
        enquiryForm.reportValidity();
        return;
      }

      const customerName =
        document.getElementById("name").value.trim();

      const product =
        document.getElementById("product").value;

      const quantity =
        Number(document.getElementById("quantity").value);

      const unit =
        document.getElementById("unit").value;

      const enquiryType =
        document.getElementById("type").value;

      if (!Number.isInteger(quantity) || quantity < 1) {
        message.textContent =
          "Please enter a valid quantity.";
        return;
      }

      const correctUnits = {
        eggs: "trays",
        chicken: "chickens",
        supplies: "items"
      };

      if (correctUnits[product] !== unit) {
        message.textContent =
          "Please select the correct quantity unit for your product.";
        message.focus();
        return;
      }

      const submitButton =
        enquiryForm.querySelector('button[type="submit"]');

      const originalButtonText = submitButton
        ? submitButton.textContent
        : "";

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";
      }

      message.textContent = "Submitting your enquiry. Please wait.";

      try {

        const formData = new FormData(enquiryForm);

        formData.append(
          "_subject",
          "New GreenNest Product Enquiry"
        );

        const response = await fetch(
          "https://formspree.io/f/mzeeydqz",
          {
            method: "POST",
            body: formData,
            headers: {
              "Accept": "application/json"
            }
          }
        );

        if (!response.ok) {
          throw new Error("The enquiry could not be submitted.");
        }

        let responseText = "";

        if (product === "eggs") {

          const pricePerTray = 55;
          const totalCost = quantity * pricePerTray;

          responseText =
            " Your estimated cost is R" +
            totalCost.toFixed(2) +
            " at R55 per tray. This estimate is subject to confirmation.";

        }

        else if (product === "chicken") {

          responseText =
            " Pricing and availability of broiler chickens must be confirmed.";

        }

        else if (product === "supplies") {

          responseText =
            " A quotation and product availability confirmation will be required.";

        }

        message.textContent =
          "Thank you, " + customerName + "!" +
          " Your " + enquiryType.toLowerCase() +
          " has been successfully submitted to GreenNest." +
          responseText;

        enquiryForm.reset();

        message.setAttribute("tabindex", "-1");
        message.focus();

      } catch (error) {

        message.textContent =
          "Sorry, your enquiry could not be submitted. Please check your internet connection and try again.";

        message.focus();

      } finally {

        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }

      }

    });

  }


  // ==========================================
  // 2. PRODUCT SEARCH AND CATEGORY FILTERING
  // ==========================================

  const searchInput =
    document.getElementById("productSearch");

  const categoryFilter =
    document.getElementById("productCategory");

  const products =
    document.querySelectorAll(".product");

  const noProducts =
    document.getElementById("noProducts");

  function filterProducts() {

    if (!searchInput || !categoryFilter) return;

    const searchText =
      searchInput.value.toLowerCase().trim();

    const selectedCategory =
      categoryFilter.value;

    let visibleProducts = 0;

    products.forEach(function (product) {

      const heading = product.querySelector("h2");
      const description = product.querySelector("p");

      const productName = heading
        ? heading.textContent.toLowerCase()
        : "";

      const productDescription = description
        ? description.textContent.toLowerCase()
        : "";

      const category = product.dataset.category;

      const matchesSearch =
        productName.includes(searchText) ||
        productDescription.includes(searchText);

      const matchesCategory =
        selectedCategory === "all" ||
        category === selectedCategory;

      if (matchesSearch && matchesCategory) {
        product.hidden = false;
        visibleProducts++;
      } else {
        product.hidden = true;
      }

    });

    if (noProducts) {
      noProducts.hidden = visibleProducts !== 0;
    }

  }

  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProducts);
  }


  // ==========================================
  // 3. PRODUCT IMAGE LIGHTBOX
  // ==========================================

  const lightbox =
    document.getElementById("imageLightbox");

  const lightboxImage =
    document.getElementById("lightboxImage");

  const closeLightbox =
    document.getElementById("closeLightbox");

  const productImages =
    document.querySelectorAll(".product-image img");

  function closeImageLightbox() {
    if (lightbox) {
      lightbox.hidden = true;
    }
  }

  productImages.forEach(function (image) {

    image.style.cursor = "pointer";

    image.addEventListener("click", function () {

      if (!lightbox || !lightboxImage) return;

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;

      lightbox.hidden = false;

      if (closeLightbox) {
        closeLightbox.focus();
      }

    });

  });

  if (closeLightbox) {
    closeLightbox.addEventListener(
      "click",
      closeImageLightbox
    );
  }

  if (lightbox) {

    lightbox.addEventListener("click", function (event) {

      if (event.target === lightbox) {
        closeImageLightbox();
      }

    });

  }

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeImageLightbox();
    }

  });


  // ==========================================
  // 4. SCROLL ANIMATIONS
  // ==========================================

  const animatedElements =
    document.querySelectorAll(".card, .product-enquiry");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.15
      }
    );

    animatedElements.forEach(function (element) {

      element.classList.add("fade-in");

      observer.observe(element);

    });

  } else {

    animatedElements.forEach(function (element) {
      element.classList.add("visible");
    });

  }


  // ==========================================
  // 5. CONTACT FORM VALIDATION
  // ==========================================

  const contactForm =
    document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const contactMessage =
        document.getElementById("contactFormMessage");

      if (!contactForm.checkValidity()) {

        contactForm.reportValidity();

        if (contactMessage) {
          contactMessage.textContent =
            "Please complete all required contact information.";
        }

        return;

      }

      const name =
        document.getElementById("contactName").value.trim();

      const email =
        document.getElementById("contactEmail").value.trim();

      const type =
        document.getElementById("contactType").value;

      const messageText =
        document.getElementById("contactMessage").value.trim();

      const recipient =
        "faithnkuna67@gmail.com";

      const subject =
        encodeURIComponent("GreenNest Website - " + type);

      const body =
        encodeURIComponent(
          "Name: " + name + "\n" +
          "Email: " + email + "\n" +
          "Message type: " + type + "\n\n" +
          "Message:\n" + messageText
        );

      const emailLink =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;

      if (contactMessage) {
        contactMessage.textContent =
          "Your message has been validated. Your email application will open so you can review and send the message.";
      }

      window.location.href = emailLink;

    });

  }

});

document.addEventListener("DOMContentLoaded", function () {

  // 1. ENQUIRY FORM VALIDATION

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
        "Thank you! Your enquiry has been captured successfully. GreenNest will review your request.";

      message.setAttribute("tabindex", "-1");
      message.focus();

      form.reset();
    });
  }


  // 2. PRODUCT SEARCH FUNCTIONALITY

  const searchInput = document.getElementById("productSearch");
  const categoryFilter = document.getElementById("productCategory");
  const products = document.querySelectorAll(".product");
  const noProducts = document.getElementById("noProducts");

  function filterProducts() {

    if (!searchInput || !categoryFilter) return;

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    let visibleProducts = 0;

    products.forEach(function (product) {

      const productName =
        product.querySelector("h2").textContent.toLowerCase();

      const productDescription =
        product.querySelector("p").textContent.toLowerCase();

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


  // 3. PRODUCT IMAGE LIGHTBOX

  const lightbox = document.getElementById("imageLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeLightbox = document.getElementById("closeLightbox");

  const productImages = document.querySelectorAll(
    ".product-image img"
  );

  productImages.forEach(function (image) {

    image.style.cursor = "pointer";

    image.addEventListener("click", function () {

      if (!lightbox || !lightboxImage) return;

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;

      lightbox.hidden = false;

    });

  });

  function closeImageLightbox() {

    if (lightbox) {
      lightbox.hidden = true;
    }

  }

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


  // 4. SIMPLE SCROLL ANIMATION

  const animatedElements = document.querySelectorAll(
    ".card, .product-enquiry"
  );

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

});

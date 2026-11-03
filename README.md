# GreenNest Poultry Supplies Website

## 1. Project Overview

GreenNest Poultry Supplies is a business website developed to promote poultry products and supplies in Malelane, Mpumalanga, South Africa.

The website provides information about the business, its products and services, and allows customers to submit product enquiries and general messages.

The main purpose of the website is to establish an online presence for GreenNest Poultry Supplies, improve communication with customers and make information about poultry products easily accessible.

**Business Information**

- Business Name: GreenNest Poultry Supplies
- Location: Malelane, Mpumalanga, South Africa
- Contact Email: faithnkuna67@gmail.com
- Website: https://faithnkuna67-cmyk.github.io/GreenNest-Poultry-Website/

## 2. Website Objectives

The website was developed to:

- Introduce GreenNest Poultry Supplies to potential customers.
- Display available poultry products and supplies.
- Provide information about the business.
- Allow customers to make product and service enquiries.
- Allow visitors to send general messages.
- Improve the accessibility and usability of the website.
- Establish an online presence through GitHub Pages.

## 3. Website Pages

The website consists of five main pages.

### 3.1 Home Page

The homepage introduces GreenNest Poultry Supplies and provides navigation to the other website pages. It includes links that allow visitors to view products and submit enquiries.

### 3.2 About Page

The About page provides information about GreenNest Poultry Supplies, its purpose and its business activities.

### 3.3 Products Page

The Products page displays poultry products and supplies. JavaScript functionality allows visitors to search for products and filter products according to their categories. Product images can also be opened in a larger lightbox view.

### 3.4 Enquiries Page

The Enquiries page allows customers to submit questions about products, quantities and availability.

The form includes HTML5 validation and JavaScript validation. It uses AJAX and Formspree to process submissions without requiring the customer to leave the webpage.

For egg enquiries, the website provides an estimated price of R55 per tray. The final price and availability are subject to confirmation.

### 3.5 Contact Page

The Contact page provides business contact information and a general contact form.

The form collects the customer's full name, email address, phone number, message type and full message.

JavaScript validates the information and prepares an email addressed to the business email address. The customer can review and send the email through their email application.

## 4. Technologies Used

The website was developed using:

- HTML5 – Used to structure the website pages and forms.
- CSS3 – Used for website styling, layout, responsiveness and transitions.
- JavaScript – Used to implement interactive features, form validation and dynamic functionality.
- Formspree – Used to receive and process product enquiry submissions.
- GitHub – Used for version control and repository management.
- GitHub Pages – Used to publish and host the website.

## 5. Part 1: Website Development

The initial development involved creating the website structure and establishing the main pages.

The project included:

- Creating the homepage.
- Developing the About page.
- Creating the Products page.
- Developing the Enquiries page.
- Creating the Contact page.
- Adding website navigation.
- Organising website images and resources.
- Establishing the basic website layout.

## 6. Part 2: Website Styling and Responsiveness

Part 2 focused on improving the appearance and usability of the website through CSS.

The improvements included:

- Applying consistent colours and typography.
- Improving navigation and page layouts.
- Styling buttons, forms and product sections.
- Organising content into readable sections.
- Improving the presentation of product images.
- Implementing responsive layouts for different screen sizes.
- Testing the website on mobile devices, tablets and laptops.

## 7. Part 3: Functionality and SEO Enhancements

Part 3 focused on introducing JavaScript functionality, improving search engine optimisation and implementing additional form features.

### 7.1 JavaScript Enhancements

The following JavaScript features were implemented:

**Form Validation**

JavaScript checks customer input before processing form submissions. HTML5 validation attributes are also used to ensure that required information is provided and that input formats are appropriate.

**AJAX Enquiry Submission**

The product enquiry form uses the Fetch API to submit information asynchronously to Formspree.

The submission process includes:
- Preventing the default form submission.
- Checking the validity of customer information.
- Sending form data to Formspree.
- Displaying a submission confirmation.
- Displaying an error message if submission fails.
- Resetting the form after successful submission.

**Dynamic Product Search and Filtering**

Visitors can search for products using keywords and filter displayed products according to their categories.

**Product Image Lightbox**

Visitors can click product images to view larger versions. The lightbox can be closed using its close control or the Escape key.

**Scroll Animations**

JavaScript and CSS are used to introduce animations when selected website elements enter the visible screen area.

**Contact Form Email Preparation**

The Contact form uses JavaScript to validate the customer's information and prepare an email containing the submitted details. The email is addressed to the GreenNest business email address and can be sent through the customer's email application.

### 7.2 Search Engine Optimisation

SEO improvements were implemented to improve the website's structure and visibility to search engines.

The improvements include:

- Adding descriptive page titles.
- Adding individual meta descriptions.
- Including relevant keywords.
- Adding author and robots metadata.
- Improving heading structures.
- Adding descriptive image alternative text.
- Improving internal navigation links.
- Using descriptive page names.
- Improving mobile responsiveness.

### 7.3 Technical SEO Files

Two additional files were created.

**robots.txt**

This file provides instructions to search engine crawlers about accessing the website and identifies the sitemap location.

**sitemap.xml**

This file lists the five main website pages to help search engines discover the website's structure.

### 7.4 Website Performance and Security

The website uses responsive design and organised HTML, CSS and JavaScript files.

HTML5 form validation and HTTPS hosting through GitHub Pages are also used as part of the website's functionality and security practices.

## 8. Website Testing

The website was tested to check its functionality and usability.

The testing included:

- Opening and navigating between all five website pages.
- Checking product search functionality.
- Checking product category filtering.
- Opening and closing product images using the lightbox.
- Testing scroll animations.
- Checking required form fields.
- Testing enquiry form submissions through Formspree.
- Confirming that successful enquiries appear in the Formspree inbox.
- Testing the Contact form and checking that the prepared email contains the customer's information.
- Checking the website on mobile phones, tablets and laptops.

The website was also checked after deployment to ensure that the published pages were accessible.

## 9. Repository Structure

The project is organised as follows:

```text
GreenNest-Poultry-Website/
│
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── Images/
│
├── wireframes/
│
└── screenshots/
```

## 10. Changelog

The changelog records the development and improvements made to the website.

### Part 1: Initial Website Development

- Created the initial GreenNest Poultry Supplies website.
- Developed the Home, About, Products, Enquiries and Contact pages.
- Added navigation links between the pages.
- Established the initial website structure and content.
- Added initial product and business information.

### Part 2: Styling and Responsiveness

- Improved the website's visual presentation through CSS.
- Updated navigation, buttons, forms and content sections.
- Improved the layout and organisation of product information.
- Added responsive styling to support mobile phones, tablets and desktop computers.
- Improved the overall consistency of the website.

### Part 3: Functionality and SEO

- Added JavaScript validation to the product enquiry form.
- Integrated Formspree using AJAX to process product enquiries.
- Added submission confirmation and error messages.
- Implemented the R55 per tray egg price estimation.
- Added JavaScript product search and category filtering.
- Implemented a product image lightbox.
- Added scroll animations using JavaScript and CSS.
- Updated all five HTML pages with improved SEO metadata.
- Improved heading structures and image alternative text.
- Improved form accessibility through labels and validation attributes.
- Added a general contact form to contact.html.
- Implemented JavaScript validation for the general contact form.
- Added functionality to prepare emails containing customer contact information and messages.
- Created robots.txt to provide crawler instructions.
- Created sitemap.xml to list the website's main pages.
- Updated README documentation to explain the Part 3 improvements.
- Tested both forms and confirmed successful enquiry processing through Formspree.
- Tested the website on different devices and screen sizes.

## 11. Website and Repository Links

**Live Website:**

https://faithnkuna67-cmyk.github.io/GreenNest-Poultry-Website/

**GitHub Repository:**

https://github.com/faithnkuna67-cmyk/GreenNest-Poultry-Website

## 12. References

The following online resources were consulted during the development and improvement of the website.

### HTML and CSS

- Mozilla Developer Network (MDN) (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 3 November 2026).

- Mozilla Developer Network (MDN) (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 3 November 2026).

### JavaScript and Form Functionality

- Mozilla Developer Network (MDN) (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 3 November 2026).

- Mozilla Developer Network (MDN) (n.d.) *Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (Accessed: 3 November 2026).

- Formspree (n.d.) *Formspree Documentation*. Available at: https://help.formspree.io/ (Accessed: 3 November 2026).

### Search Engine Optimisation

- Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 3 November 2026).

- Google Search Central (n.d.) *Build and Submit a Sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed: 3 November 2026).

### Website Hosting and Repository Management

- GitHub Docs (n.d.) *GitHub Pages Documentation*. Available at: https://docs.github.com/en/pages (Accessed: 3 November 2026).

---

**End of README**




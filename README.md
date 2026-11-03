# GreenNest Poultry Supplies

**WEDE5020 – Portfolio of Evidence (POE): Parts 1, 2 and 3**

## 1. Project Overview

GreenNest Poultry Supplies is a small business website project based in Malelane, Mpumalanga, South Africa.

The website provides information about poultry products and services, including fresh eggs, broiler chickens and poultry supplies.

The purpose of this project is to create a professional, user-friendly and responsive website that allows visitors to explore the business, view products, make enquiries and find general business information.

## 2. Website Pages

The website consists of five main pages:

- **Home (index.html):** Introduces GreenNest Poultry Supplies and provides links to the other pages.
- **About (about.html):** Explains the business, its mission, vision and values.
- **Products (products.html):** Displays the products and poultry supplies offered.
- **Enquiries (enquiry.html):** Provides an enquiry form for visitors.
- **Contact (contact.html):** Provides business contact and service-area information.

## 3. Technologies Used

- **HTML5:** Website structure and content.
- **CSS3:** Styling, layouts and responsive design.
- **JavaScript:** Form validation, product searching, category filtering, image lightbox and interactive feedback.
- **GitHub:** Source code management and version control.
- **GitHub Pages:** Website hosting.

## 4. Repository Structure

The project is organised into the following folders and files:

- `css/` – Contains the external stylesheet.
- `Images/` – Contains website images.
- `js/` – Contains JavaScript functionality.
- `wireframes/` – Contains the website wireframe.
- `screenshots/` – Contains desktop, tablet and mobile testing screenshots.
- `index.html` – Home page.
- `about.html` – About page.
- `products.html` – Products page.
- `enquiry.html` – Enquiry page.
- `contact.html` – Contact page.
- `README.md` – Project documentation.

## 5. Part 2: CSS Styling and Responsive Design

### 5.1 External Stylesheet

An external CSS stylesheet is used to control the appearance of the website. The stylesheet is located at `css/style.css` and is linked to the HTML pages.

This allows the website pages to share consistent styling and makes future updates easier.

### 5.2 Base Styling and CSS Reset

A CSS reset has been applied to improve consistency between browsers. The universal selector and pseudo-elements use `box-sizing: border-box`.

Base styles have also been applied to the body, images, headings and other website elements.

### 5.3 Typography

A consistent font family, font sizes, colours and heading styles have been used to improve readability and maintain a professional appearance.

### 5.4 Layout

CSS Flexbox and Grid techniques are used to organise website content. Product cards are arranged in columns on larger screens and adjust to smaller screens.

### 5.5 Visual Styling and Pseudo-classes

The website includes consistent colours, backgrounds, spacing, buttons, cards and form styling.

Hover and focus effects provide visual feedback when visitors interact with links, buttons and form controls.

## 6. Responsive Design

### 6.1 Responsive Breakpoints

Media queries have been added to adjust the website layout for different screen sizes.

- Desktop: Larger screens.
- Tablet: Screens up to 900px.
- Mobile: Screens up to 600px.

### 6.2 Relative Units

Responsive sizing techniques are used to help content adjust to different screen sizes. Flexible widths and maximum-width rules help prevent content from overflowing.

### 6.3 Responsive Images

Images are styled to remain within their containers using responsive image sizing. The project uses the existing product image in the website.

Separate image sizes and multiple image sources using `srcset` have not yet been implemented.

### 6.4 Testing and Iteration

The website was tested using Google Chrome Developer Tools and its responsive device preview.

The following screen layouts were checked:

- Desktop layout.
- Tablet layout.
- Mobile layout.

The tests checked navigation, image display, product cards, text readability, page layout and the enquiry form.

## 7. Part 3: JavaScript Functionality

JavaScript was added to improve the website's interactivity and provide visitors with a better user experience.

The JavaScript code is stored in `js/script.js`.

### 7.1 Enquiry Form Validation

The enquiry form uses JavaScript to validate information entered by visitors.

The form checks that required fields are completed and that the selected product, quantity and quantity unit are compatible.

A confirmation message is displayed when the form passes validation.

For fresh egg enquiries, an estimated amount is calculated using R55 per tray. The displayed amount is an estimate and is subject to confirmation.

The form demonstrates front-end validation and feedback. It does not automatically send enquiries to a server or store customer information in a database.

### 7.2 Product Search

A product search feature allows visitors to search for products using keywords.

The search function checks product information and displays matching products.

### 7.3 Product Category Filtering

Visitors can filter products according to their selected category.

This makes it easier to find specific poultry products and supplies.

### 7.4 Product Image Lightbox

An image lightbox allows visitors to enlarge product images.

Visitors can close the enlarged image using the close button or the Escape key.

### 7.5 Scroll Animations

Scroll animations provide visual effects as visitors move through the website.

Website cards and selected content elements appear with a fade-in effect.

### 7.6 Contact Functionality

The website includes a business email link on the Contact page.

The JavaScript file also contains contact-form email-draft functionality for a compatible contact form. The current Contact page does not contain that form.

The email-draft functionality uses the visitor's default email application and does not send an email automatically.

## 8. SEO and Accessibility Improvements

Search Engine Optimisation (SEO) and accessibility improvements were made across the website pages.

### 8.1 SEO Metadata

The HTML pages were updated with improved metadata, including:

- Descriptive page titles.
- Relevant meta descriptions.
- Keywords related to poultry products and services.
- Author information.
- Search engine indexing instructions.

These improvements help search engines understand the content and purpose of each page.

### 8.2 Heading Structure

Page headings were improved to make the content easier to understand.

Descriptive headings were added to identify the main topics and sections on each page.

### 8.3 Image Accessibility

Descriptive alternative text was added to relevant product and website images.

This helps visitors using screen readers understand the purpose of the images.

### 8.4 Navigation Accessibility

Navigation elements include descriptive labels.

The current page is identified using `aria-current="page"` to help visitors understand which page they are viewing.

### 8.5 Form Accessibility

Form fields use labels connected to their corresponding input elements.

The enquiry form also includes required-field validation and an accessible status message for JavaScript feedback.

## 9. Part 1 Improvements

The following improvements were made in response to earlier project feedback:

- Improved the project documentation and README structure.
- Added a website wireframe in the `wireframes/` folder.
- Organised the product image inside the `Images/` folder.
- Corrected website navigation links to match the actual lowercase HTML filenames.
- Improved website styling and page consistency.
- Added responsive design testing evidence.
- Improved the organisation of the website files.

## 10. Changelog

### Part 1

- Created the initial GreenNest Poultry Supplies website.
- Added the main HTML pages.
- Added the initial website images and navigation.
- Created the initial website wireframe.

### Part 2

- Improved the external CSS stylesheet.
- Added CSS reset and typography styling.
- Improved layouts using Grid and Flexbox.
- Added hover and focus effects.
- Added tablet and mobile media queries.
- Improved image responsiveness.
- Updated the enquiry form and JavaScript validation.
- Corrected image paths and navigation links.
- Added desktop, tablet and mobile screenshots.
- Updated project documentation.

### Part 3

- Improved JavaScript enquiry form validation and feedback.
- Added product search functionality.
- Added product category filtering.
- Added product image lightbox functionality.
- Added scroll animations.
- Improved SEO metadata across the website pages.
- Improved page titles and descriptions.
- Improved image alternative text.
- Improved navigation accessibility.
- Improved form accessibility.
- Updated the README documentation.
- Tested the main JavaScript features and website navigation.

## 11. References

- GitHub (n.d.) *GitHub Docs*. Available at: https://docs.github.com/ (Accessed: 3 November 2026).
- MDN Web Docs (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 3 November 2026).
- MDN Web Docs (n.d.) *HTML forms*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms (Accessed: 3 November 2026).
- MDN Web Docs (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 3 November 2026).
- MDN Web Docs (n.d.) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 3 November 2026).
- MDN Web Docs (n.d.) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 3 November 2026).
- W3C (n.d.) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 3 November 2026).

## 12. Website and Repository Links

**Live website:**

https://faithnkuna67-cmyk.github.io/GreenNest-Poultry-Website/

**GitHub repository:**

https://github.com/faithnkuna67-cmyk/GreenNest-Poultry-Website

---

**Project:** GreenNest Poultry Supplies  
**Module:** WEDE5020  
**Assessment:** Portfolio of Evidence – Parts 1, 2 and 3

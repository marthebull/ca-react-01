# React Course Assignment - eCom Store
####  by Marthe Bull Pettersen

<br/>

### Links and resources

[![Netlify Status](https://api.netlify.com/api/v1/badges/5412776a-c94a-4789-993f-20da70bad59f/deploy-status)](https://app.netlify.com/sites/kaleidoscopic-capybara-465e22/deploys)

🌐 [Live site at Netlify: https://highestbidder.netlify.app](https://highestbidder.netlify.app/)

🎨  [Figma - all design files, style guides and prottypes ](https://www.figma.com/file/RFc5emi6a6jUG75sDU1LoM/Semester-project-2?type=design&node-id=204-84&t=A6JJhVl57isURRqS-0)

💻  [Figma protoype desktop](https://www.figma.com/proto/RFc5emi6a6jUG75sDU1LoM/Semester-project-2?type=design&node-id=15-677&scaling=min-zoom&page-id=1%3A4&starting-point-node-id=15%3A677)

#### NOTE: For testing the live site you have to register with a @noroff.no or @stud.noroff.no email.
<br />
<br />

![Site preview](https://marthebull.no/wp-content/uploads/2023/06/thingyverse2.png)


### Description of project

In this project, I built an e-commerce store using React. The store consists of essential pages: a homepage displaying products with a search bar, individual product pages with detailed information, discounts, and reviews, a cart page to manage added products, a checkout success page for order confirmation, and a contact page with form validation.

To ensure a cohesive user experience, I implemented a <Layout> component with a header containing a navigation bar and a cart icon displaying the item count. React Router enables smooth navigation between pages. The design is responsive, catering to various screen sizes.

In summary, this project involves a responsive e-commerce store with essential pages, including product listings, detailed product pages, a cart system, checkout confirmation, and a contact page with form validation, all developed using React and clean coding practices.

<br />

### Goal
  
The goal of this project is to build an e-commerce store with multiple pages using React. The API to be used for this project is https://api.noroff.dev/api/v1/online-shop.
  
<br />
  
### Brief 

The following pages need to be implemented:

1. Homepage:
   - Display a list of all products.
   - Include a look-ahead search bar for filtering products by name.
   - Clicking on a product should navigate to the individual product page.

2. Individual Product Page:
   - Display detailed information about a single product.
   - Include the title, description, and image of the product.
   - Show reviews for the product if available.
   - Utilize the discountedPrice property to display the price, calculating and displaying any discounts.

3. Cart Page:
   - Display a list of products added to the cart.
   - Show the total amount for the products in the cart.
   - Include a Checkout button.

4. Checkout Success Page:
   - Display a message confirming a successful order.
   - Provide a link to go back to the store.
   - Clear the cart upon reaching this page.

5. Contact Page:
   - Include a contact form with fields for full name, subject, email, and body.
   - Implement form validation with specific requirements for each field.

Additional Project Details:

- Use a `<Layout>` component that contains a header and footer.
- The header should include a navigation bar and a Cart icon component displaying the number of items in the cart.
- Implement routing using React Router to switch between pages.
- Design the application to be responsive, considering various screen sizes.
- You can choose to use a CSS Framework, but it is encouraged to design from scratch using styled-components or CSS Modules.
- TypeScript usage is not required.
- Ensure clean and well-formatted code.

By completing this project, you will have built an e-commerce store with essential pages, product details, a cart system, and a contact form with validation.


<br />

### Run this project locally

After downloading repo install node modules with 

#### `npm install`

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

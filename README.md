# Fresh Cartify

## Overview

**Fresh Cartify** is a modern eCommerce web application designed to provide a seamless shopping experience. Built using React and Tailwind CSS, it leverages a component-based architecture to deliver a highly interactive and responsive user interface. The application features robust state management through React Context, and it integrates with Stripe for secure payment processing.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

## Demo

<a href="https://yousef-fresh-cartify.vercel.app/" target="_blank">Fresh Cartify</a>

## Features

- **User Authentication**: Secure user registration, login, and password reset functionality.
- **Product Management**: View, search, and filter products with real-time updates.
- **Shopping Cart**: Add, remove, and manage items in the cart with dynamic calculations.
- **Wishlist**: Add favorite products to the wishlist and manage them easily.
- **Order History**: View all previous orders with details on the All Orders page.
- **Secure Payments**: Integrated with Stripe for secure payment processing.
- **Responsive Design**: Fully responsive UI that works seamlessly across all devices.

## Project Structure

```plaintext
freshcart/
├── public/
│   ├── freshcart-logo.ico
│   ├── freshcart-logo.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── react.svg
│   ├── Components/
│   │   ├── AllOrders/
│   │   ├── BrandDetails/
│   │   ├── Cart/
│   │   ├── Home/
│   │   ├── ProductDetails/
│   │   ├── Products/
│   │   ├── RelatedProducts/
│   │   ├── Wishlist/
│   ├── Context/
│   │   ├── CartContext.jsx
│   │   ├── UserContext.jsx
│   │   ├── WishlistContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
├── .eslintrc.cjs
├── .gitignore
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```


## Key Components

- **AllOrders**: Displays a list of all orders placed by the user.
- **BrandDetails**: Shows detailed information about specific brands.
- **Cart**: Manages the shopping cart functionality.
- **Wishlist**: Allows users to add and manage products in their wishlist.
- **ProductDetails**: Displays detailed information about individual products.
- **RelatedProducts**: Suggests products related to the one currently viewed.

## Installation

To get started with FreshCart, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/freshcart.git
   cd freshcart

2. **Install Dependencies**:
   ```bash
   npm install

3. **Run the Development Server**:
   ```bash
   npm run dev


## Usage

Once the development server is running, you can access the application .

- **Browse Products**: Explore various products available in the store.
- **Add to Cart/Wishlist**: Add products to your cart or wishlist for later purchase.
- **Checkout**: Complete your order and make secure payments through Stripe.
- **Manage Account**: Update your account details and view your order history.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: React Context API
- **Build Tool**: Vite
- **CSS**: Tailwind CSS
- **Payment Integration**: Stripe
- **Deployment**: Vercel 


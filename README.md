# Laboratory Exercise 3: React Props and Component Communication

**Subject:** DCIT26 - Application Development and Emerging Technologies

**Project:** CvSU Mini Store

## Project Description
A simple product catalog built using React. It demonstrates props, reusable components, callback functions, and conditional rendering.

## Features
- Displays 8 products.
- Shows product prices in Philippine pesos.
- Displays In Stock and Out of Stock labels.
- Disables buttons for unavailable products.
- Includes New and Sale badges.
- Has an Add to Cart function and running cart count.
- Uses responsive CSS design.

## Technologies Used
- React
- JavaScript
- CSS
- Vite

## How to Run
1. Open the project in VS Code.
2. Open the terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the localhost link.

## Guide Questions

**1. What is the difference between props and state?**
Props are passed from parent to child, while state stores data that can change inside a component.

**2. Why can a child component not modify the props it receives?**
Because props are read-only and controlled by the parent component.

**3. How does the onAddToCart callback allow data to flow from child to parent?**
The parent passes a function to the child, and the child calls it to send the product title back.

**4. Why is the key prop required when rendering a list with .map()?**
It helps React identify each item using a unique key and update lists correctly.

**5. What does the children prop allow you to do?**
It allows us to place content inside a component, such as New and Sale badges.
# Book Library

**Book Library** is a React-based web application that allows users to explore, search, and view details of books. It features dynamic routing, private routes, search functionality, and data fetching from a local API.

## Features

- **React Router** for seamless navigation between pages.
- **Route Redirection** using `Navigate` for handling redirects.
- **Dynamic Route Parameters** for viewing individual book details.
- **Not Found Route** for handling unknown URLs.
- **Query Parameters** for searching books by title and author.
- **Private Routes** for secured access to specific pages.
- **Local API** for fetching book data.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling routing in the app.
- **React State**: For managing the state of book data and user interactions.
- **Local API**: Mocked API used to fetch book data.

## Features in Detail

### **1. Search Books**

- You can search for books by **title** or **author**.
- Query parameters are used to filter the book list as you type.

### **2. View Book Details**

- Clicking on a book will navigate to a **dynamic route** that displays detailed information about the selected book.

### **3. Private Routes**

- Some routes are protected and can only be accessed by authenticated users. Unauthorized users will be redirected to the login page.

### **4. Not Found Route**

- If the user navigates to an invalid URL, a **404 page** will be shown.

## Contributing

Feel free to fork the repository, make changes, and create a pull request if you'd like to contribute.

If you have any suggestions for improvements, feel free to open an issue or create a pull request. Contributions are always welcome!
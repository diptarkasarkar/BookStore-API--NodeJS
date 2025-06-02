# Bookstore API

A simple RESTful API for managing bookstore data, built with Node.js, Express.js, and MongoDB. This API supports full CRUD (Create, Read, Update, Delete) operations for books.

## Features

* **Create Books:** Add new book entries to the database.
* **Read Books:**
    * Get all books.
    * Get a single book by ID.
* **Update Books:** Modify existing book entries.
* **Delete Books:** Remove book entries from the database.
* **MongoDB Integration:** Persistent storage for book data.
* **RESTful Design:** Clean and intuitive API endpoints.

## Technologies Used

* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web application framework for Node.js.
* **MongoDB:** NoSQL database.
* **Mongoose:** MongoDB object data modeling (ODM) for Node.js.
* **dotenv:** For loading environment variables.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
* [MongoDB](https://account.mongodb.com/account/login) (Free MongoDB cloud account)

### Installation

1.  **Clone the repository:**

2.  **Install dependencies:**
    ```bash
    npm install
    npm install express nodemon mongoose
    ```

### Running the API

1.  **Start MongoDB:** Ensure your MongoDB instance is running & Enter the password in db.js.

2.  **Start the Node.js server:**
    ```bash
    npm run dev
    ```
    The API will be running at `http://localhost:3000` (or the port you specified in `.env`).         

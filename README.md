#  Library Management System

A full-stack **Library Management System** built with **Node.js**, **Express**, **MongoDB**, and **React.js**. This application allows users to sign up, log in, and manage books depending on their role (admin or normal user). It features secure authentication, role-based access control, pagination, and search functionality.

---

##  Features

###  User Authentication

* Secure sign-up and login system.
* Passwords hashed using **bcrypt**.
* Session management using **JWT tokens**.

###  Admin Privileges

* Add, update, and delete books.
* Manage the entire book catalog.

###  Normal User Privileges

* View all available books.
* Search books by title, author, or description.
* Paginated book display.

###  UI & UX (React.js)

* Modern and responsive design built with React.
* Search and pagination on the client side.
* Token-based requests for secure communication.

---

##  Tech Stack

### Backend

* **Node.js**
* **Express.js**
* **MongoDB** with Mongoose
* **bcrypt** for password hashing
* **jsonwebtoken (JWT)** for authentication
* **dotenv** for environment variables

### Frontend

* **React.js (Vite or Create React App)**
* **Axios or Fetch API** for HTTP requests
* **React Router** for navigation

---

##  Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Manzi-Elvis/Library-System.git
cd Library-System
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside the server folder and add:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/library
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
```

Then run the backend:

```bash
npm start
```

### 3️⃣ Setup Frontend

```bash
cd Client
npm install
npm start
```

Ensure the backend API is running on **[http://localhost:5000](http://localhost:5000)**.

---

##  Security

* Passwords are hashed before being stored.
* Tokens are used to secure endpoints.
* Admin-only routes are protected via middleware.
* Basic CORS protection enabled.

>  For production, use **httpOnly cookies** instead of localStorage for tokens to improve security.

---

##  API Endpoints

### Auth Routes (`/api/auth`)

| Method | Endpoint  | Description                     |
| ------ | --------- | ------------------------------- |
| POST   | `/signup` | Create a new user               |
| POST   | `/login`  | Authenticate user and get token |

### Book Routes (`/api/books`)

| Method | Endpoint | Description                              | Access     |
| ------ | -------- | ---------------------------------------- | ---------- |
| GET    | `/`      | Get all books (with pagination & search) | All users  |
| GET    | `/:id`   | Get single book                          | All users  |
| POST   | `/`      | Add new book                             | Admin only |
| PUT    | `/:id`   | Update a book                            | Admin only |
| DELETE | `/:id`   | Delete a book                            | Admin only |

---

##  Project Structure

```
project/
  ├── Server/
  │   ├── models/
  │   │   ├── User.js
  │   │   └── Book.js
  │   ├── routes/
  │   │   ├── auth.js
  │   │   └── books.js
  │   ├── middleware/
  │   │   └── auth.js
  │   ├── server.js
  │   └── .env
  ├── Client/
  │   ├── src/
  │   │   ├── pages/
  │   │   ├── components/
  │   │   ├── api.js
  │   │   └── utils/auth.js
  │   ├── package.json
  │   └── vite.config.js or similar
  └── README.md
```
<!-- 
---

##  Screenshots (optional)

*Add screenshots of your UI (login page, book list, admin dashboard).* -->

---

##  Future Improvements

* Add book cover upload (images).
* Implement refresh tokens.
* Add user profile management.
* Add analytics dashboard for admins.
* Implement server-side input validation.

---

##  Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

##  Author:

**MANZI RURANGIRWA Elvis**

A passionate technologist and software engineer dedicated to building scalable, secure, and user-friendly systems.

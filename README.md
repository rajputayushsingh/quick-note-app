# 📝 Quick Note Application

A simple and responsive full-stack Note-Taking Web Application built using **Node.js, Express.js, HTML, CSS, and JavaScript**.

The application allows users to create, view, and delete notes through a RESTful API and asynchronous frontend requests using the JavaScript `fetch()` API.

## 🚀 Features

* ✅ Create new notes
* ✅ Display all saved notes
* ✅ Delete notes
* ✅ RESTful API endpoints
* ✅ Asynchronous API requests using `fetch()`
* ✅ JSON-based data storage
* ✅ Responsive and clean user interface
* ✅ Node.js and Express.js backend

## 🛠️ Technologies Used

* **HTML5** – Frontend structure
* **CSS3** – Styling and responsive layout
* **JavaScript** – Frontend functionality and API requests
* **Node.js** – Backend runtime
* **Express.js** – REST API and server
* **JSON** – Local data storage

## 📂 Project Structure

```text
quick-note-app/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── notes.json
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## 🔌 API Endpoints

### GET `/notes`

Fetches all saved notes.

```http
GET /notes
```

### POST `/notes`

Creates a new note.

```http
POST /notes
```

Example request body:

```json
{
  "title": "My Note",
  "content": "This is my first note."
}
```

### DELETE `/notes/:id`

Deletes a specific note using its ID.

```http
DELETE /notes/:id
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/rajputayushsingh/quick-note-app.git
```

### 2. Open the project

```bash
cd quick-note-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

The server will run at:

```text
http://localhost:5000
```

### 5. Open the application

Open your browser and visit:

```text
http://localhost:5000
```

## 📸 Application

The application provides a simple interface where users can:

1. Enter a note title.
2. Enter note content.
3. Click **Add Note**.
4. View saved notes.
5. Delete notes when they are no longer needed.

## 🎯 Learning Objectives

This project demonstrates:

* Building a full-stack web application
* Creating RESTful APIs with Express.js
* Handling GET, POST, and DELETE requests
* Working with JSON data storage
* Using JavaScript `fetch()` for asynchronous API communication
* Connecting frontend and backend
* Creating responsive web interfaces

## 🔮 Future Improvements

Possible future enhancements include:

* User authentication
* MongoDB database integration
* Edit/update notes
* Search functionality
* Categories and tags
* Dark mode
* Note timestamps
* Deployment to a cloud platform

## 👨‍💻 Author

**Ayush Singh**

B.Tech Computer Science & Engineering Student

GitHub: [@rajputayushsingh](https://github.com/rajputayushsingh)

---

⭐ If you find this project useful, consider giving it a star!

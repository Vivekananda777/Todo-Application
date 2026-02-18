# 📝 Full-Stack Todo Application
Spring Boot (Backend) + React (Frontend)

A simple full-stack Todo application built using:

- ⚙️ Spring Boot (REST API)
- 🗄️ H2 In-Memory Database
- ⚛️ React (Functional Components + Hooks)
- 🔗 Axios for API communication

---

## 🚀 Features

### ✅ Backend (Spring Boot)

- Create a Todo
- Get all Todos
- Filter Todos by completed status
- Update Todo (title, description, completed)
- Delete Todo
- Basic validation (Title is mandatory)
- Clean layered architecture (Controller → Service → Repository)

### ✅ Frontend (React)

- Display list of todos
- Add new todo
- Mark todo as complete/incomplete
- Delete todo
- Update todo
- Uses functional components and hooks
- Axios for API calls

---

# 📁 Project Structure

Todo-Application/
│
├── backend/
│   ├── pom.xml
│   └── src/
│       └── main/
│           │   ├── TodoApplication.java
│           │   ├── controller/
│           │   │   └── TodoController.java
│           │   ├── service/
│           │   │   └── TodoService.java
│           │   ├── repository/
│           │   │   └── TodoRepository.java
│           │   └── model/
│           │       └── Todo.java
│           └── resources/
│               ├── application.properties
│
└── frontend/
    ├── package.json
    ├── public/
    │    └── index.html
    |
    └── src/
        ├── index.js
        ├── App.js
        ├── api.js
        └── components/
            ├── TodoList.js
            ├── TodoItem.js
            └── AddTodo.js

# 📁 Project Structure


# Task Management Application 📝

This is a full-stack Task Management Application built with **React.js** (frontend), **Node.js + Express** (backend), and **MongoDB** (database).

Users can:
- Register and Login (JWT authentication)
- Create tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All / Active / Completed)

---

## 🛠 Tech Stack

**Frontend**:
- React.js (with Hooks)
- Context API (for Authentication)
- TailwindCSS (for Styling)

**Backend**:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for Authentication

---

## 📂 Project Structure

```bash
GenAIFSD/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── taskController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── taskRoutes.js
│   ├── config/
│   │   ├── db.js
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   ├── hooks/
│   │   │   ├── useTasks.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   └── package.json
├── README.md


git clone https://github.com/your-username/task-management-app.git
cd GenAIFSD

## Backend

cd backend
npm install


cd backend
npm install


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


npm run dev



## Frontend

cd frontend
npm install

npm run dev

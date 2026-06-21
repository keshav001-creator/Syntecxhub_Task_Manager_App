

  <h1>📋 Task Manager Application</h1>

  <p>
        A full-stack Task Manager application built using the MERN stack that allows users to securely manage their daily tasks.
        The application supports user authentication using JWT stored in HttpOnly cookies and provides complete CRUD functionality
        for task management.
    </p>

  <hr>

  <h2>🚀 Features</h2>

   <ul>
        <li>🔐 User Registration and Login</li>
        <li>🍪 JWT Authentication using HttpOnly Cookies</li>
        <li>🛡️ Protected Routes and Middleware</li>
        <li>➕ Create Tasks</li>
        <li>📖 View Tasks</li>
        <li>✏️ Update Task Status</li>
        <li>🗑️ Delete Tasks</li>
        <li>👤 Fetch Current Logged-in User</li>
        <li>🚪 Secure Logout Functionality</li>
        <li>📱 Responsive User Interface</li>
    </ul>

   <hr>

  <h2>🛠️ Tech Stack</h2>

  <h3>Frontend</h3>
    <ul>
        <li>React.js</li>
        <li>React Router DOM</li>
        <li>Axios</li>
        <li>Tailwind CSS</li>
        <li>Context API</li>
    </ul>

   <h3>Backend</h3>
    <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>JWT Authentication</li>
        <li>Cookie Parser</li>
        <li>Bcrypt.js</li>
    </ul>

   <hr>

   <h2>📂 Project Structure</h2>

   <pre>
task-manager-app
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
└── frontend
    ├── src
    │   ├── components
    │   ├── context
    │   ├── pages
    │   ├── services
    │   └── App.jsx
    </pre>

   <hr>

  <h2>🔑 Authentication Flow</h2>

   <ol>
        <li>User registers or logs in.</li>
        <li>Backend generates a JWT token.</li>
        <li>JWT is stored in a secure HttpOnly cookie.</li>
        <li>Protected routes verify the token using middleware.</li>
        <li>Authenticated users can perform CRUD operations on their own tasks.</li>
        <li>Logout clears the authentication cookie.</li>
    </ol>

   <hr>

   <h2>📡 API Endpoints</h2>
 <h3>Authentication Routes</h3>

   <table border="1" cellpadding="10" cellspacing="0">
      <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/auth/register</td>
            <td>Register a new user</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/auth/login</td>
            <td>Login user</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/auth/logout</td>
            <td>Logout user</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/auth/me</td>
            <td>Get current user</td>
        </tr>
    </table>

   <br>

   <h3>Task Routes</h3>

  <table border="1" cellpadding="10" cellspacing="0">
      <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/tasks</td>
            <td>Fetch all tasks</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/tasks</td>
            <td>Create a task</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/api/tasks/:id</td>
            <td>Update a task</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/tasks/:id</td>
            <td>Delete a task</td>
        </tr>
    </table>

  <hr>

  <h2>⚙️ Environment Variables</h2>

  <pre>
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
    </pre>

  <hr>

 <h2>💻 Installation & Setup</h2>

 <h3>Backend</h3>

   <pre>
cd backend

npm install

npm run dev
    </pre>

  <h3>Frontend</h3>

   <pre>
cd frontend

npm install

npm run dev
    </pre>

  <hr>

   <h2>📈 Future Enhancements</h2>

  <ul>
        <li>Task Priority Levels</li>
        <li>Due Dates and Reminders</li>
        <li>Task Categories</li>
        <li>Drag and Drop Kanban Board</li>
        <li>Dark Mode Support</li>
        <li>Task Search and Filters</li>
        <li>Email Notifications</li>
        <li>Real-time Updates using Socket.IO</li>
    </ul>

   <hr>

   <h2>👨‍💻 Author</h2>

   <p>
        Developed as a full-stack MERN project demonstrating authentication,
        secure cookie-based sessions, protected APIs, and complete task management functionality.
    </p>

</body>

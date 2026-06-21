import { useContext, useEffect, useState } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } =
    useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    if (!title.trim()) return;

    await API.post("/tasks", {
      title,
      description,
    });

    setTitle("");
    setDescription("");

    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const toggleTask = async (
    id,
    completed
  ) => {
    await API.put(`/tasks/${id}`, {
      completed: !completed,
    });

    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto p-6">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              Task Manager
            </h1>

            <p className="text-gray-600">
              Welcome {user?.name}
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Add New Task
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Task Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="border rounded-lg px-4 py-3"
            />

            <input
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="border rounded-lg px-4 py-3"
            />
          </div>

          <button
            onClick={createTask}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white rounded-2xl shadow-md p-5"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">
                  {task.title}
                </h3>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    task.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {task.completed
                    ? "Completed"
                    : "Pending"}
                </span>
              </div>

              <p className="text-gray-600 mt-3">
                {task.description}
              </p>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() =>
                    toggleTask(
                      task._id,
                      task.completed
                    )
                  }
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
                >
                  Toggle
                </button>

                <button
                  onClick={() =>
                    deleteTask(task._id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No tasks found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
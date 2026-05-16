import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Build portfolio project" },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const handleNewTaskChange = (e) => setNewTask(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>TaskFlow</h1>

        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Add a task..."
            value={newTask}
            onChange={handleNewTaskChange}
            onKeyDown={handleKeyDown}
            style={styles.input}
          />

          <button onClick={addTask} style={styles.button}>
            Add
          </button>
        </div>

        <div>
          {tasks.map((task) => (
            <div key={task.id} style={styles.task}>
              <span>{task.title}</span>

              <button
                onClick={() => deleteTask(task.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial",
  },

  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "400px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #eee",
  },

  deleteButton: {
    border: "none",
    backgroundColor: "#ffdddd",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default App;
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  function handleIsComplete(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function handleDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function handleAddtask(title, description) {
    const newtask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newtask]);
  }

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        },
      );

      const data = await response.json();
      setTasks(data);
    }
    fetchTasks();
  }, []);

  return (
    <div className="w-screen h-screen bg-neutral-400 flex justify-center p-6">
      <div className="w-[650px]">
        <h1 className="text-4xl text-neutral-50 font-bold text-center mb-2 italic">
          Gerenciador de tarefas
        </h1>
        <AddTask handleAddtask={handleAddtask} />
        <Task
          tasks={tasks}
          handleIsComplete={handleIsComplete}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;

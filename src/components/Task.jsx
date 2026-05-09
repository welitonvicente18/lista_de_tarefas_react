import { Trash, CheckCheckIcon, ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Task(props) {
  const navigate = useNavigate();

  function navigateTask(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-2 mt-2 bg-neutral-50 p-5 rounded-md ">
      {props.tasks.map((task) => {
        return (
          <li key={task.id} className="flex gap-2 align-middle">
            <button
              className={`${task.isComplete ? "bg-green-600 hover:bg-green-500" : "bg-neutral-400 hover:bg-neutral-500"} w-full text-white p-2 rounded-md flex gap-2 `}
              onClick={() => {
                props.handleIsComplete(task.id);
              }}
            >
              {task.isComplete && <CheckCheckIcon />}
              {task.title}
            </button>
            <Button onClick={() => navigateTask(task)}>
              <ChevronRightIcon />
            </Button>
            <Button>
              <Trash onClick={() => props.handleDelete(task.id)} />
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default Task;

import { ChevronLeftCircle } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-neutral-500 flex justify-center p-6">
      <div className="w-[500px] space-y-2">
        <div className="flex justify-center relative">
          <button
            className="absolute left-0 top-0 bottom-0 text-neutral-100 "
            onClick={() => navigate(-1)}
          >
            <ChevronLeftCircle />
          </button>
          <h1 className="text-3xl text-neutral-100 font-bold mb-2 italic">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="space-y-4 mt-5 p-6 bg-neutral-200 rounded-md shadow-md text-center">
          <h1>{title}</h1>
          <hr />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

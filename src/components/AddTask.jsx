import { useState } from "react";
import Input from '../components/Input';

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-neutral-200 rounded-md shadow-md">
      <Input
       type="text"
       placeholder="Digite o titulo da tarefa"
       value={title}
       onChange={(event) => setTitle(event.target.value)}
       />
      <Input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite a descrição"
      />
      <button
        className="w-full bg-neutral-600 text-white p-2  rounded-md hover:bg-neutral-400"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }
          (props.handleAddtask(title, description),
            setTitle(""),
            setDescription(""));
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;

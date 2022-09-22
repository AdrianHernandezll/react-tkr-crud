import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/counter/taskSlice";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
      ></textarea>

      <button>Save</button>
    </form>
  );
};

export default TaskForm;

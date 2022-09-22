import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/counter/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );

    navigate("/");
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

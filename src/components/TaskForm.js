import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/counter/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

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
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask({ ...task, id: params.id }));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params, tasks]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
      />

      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      ></textarea>

      <button>Save</button>
    </form>
  );
};

export default TaskForm;

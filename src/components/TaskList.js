import { useSelector } from 'react-redux';

function TaskList() {
    const tasks = useSelector((state) => state.tasks);

    console.log(tasks);
    return <div>TaskList</div>;
}

export default TaskList;

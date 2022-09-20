import './App.css';
import { useSelector } from 'react-redux';

function App() {
    const taskState = useSelector((state) => state.task);
    console.log(taskState);

    return <h1>Hello World</h1>;
}

export default App;

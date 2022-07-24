import { useState } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import "../styles/css/main.css";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Start My First React Project",
            date: "Feb 6th at 1:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Call Dan",
            date: "May 3d at 8:00am",
            reminder: true,
        },
        {
            id: 3,
            text: "Read Lord Of The Ring Novel",
            date: "Everyday Before sleeping",
            reminder: false,
        },
    ]);

    const [isOpen, setIsOpen] = useState(false);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    };

    const deleteTask = (id) => {
        setTasks(
            tasks.filter((task) => {
                return task.id !== id;
            })
        );
    };

    const switchReminder = (id) => {
        setTasks(
            tasks.map((task) => {
                return task.id === id
                    ? { ...task, reminder: !task.reminder }
                    : task;
            })
        );
    };

    const handleOpenClose = (isOpen) => {
        setIsOpen(isOpen);
    };

    return (
        <div className="center">
            <div className="app">
                <Header onOpen={handleOpenClose} />
                {isOpen && <AddTask onAdd={addTask} />}
                <Tasks
                    switchReminder={switchReminder}
                    onDelete={deleteTask}
                    tasks={tasks}
                />
            </div>
        </div>
    );
};

export default App;

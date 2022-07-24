import Task from "./Task";

const Tasks = ({ tasks, onDelete, switchReminder }) => {
    return (
        <ul className="task__list">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    switchReminder={switchReminder}
                />
            ))}
        </ul>
    );
};

export default Tasks;

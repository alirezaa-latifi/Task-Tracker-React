const Task = ({ task, onDelete, switchReminder }) => {
    return (
        <li
            className={`task__item ${
                task.reminder === true && "task__item--reminder"
            }`}
            onDoubleClick={() => {
                switchReminder(task.id);
            }}
        >
            <div>
                <p className="task__title">{task.text}</p>
                <p className="task__desc">{task.date}</p>
            </div>
            <i
                className="fa-solid fa-xmark fa-2x task__remove"
                onClick={() => {
                    onDelete(task.id);
                }}
            ></i>
        </li>
    );
};

export default Task;

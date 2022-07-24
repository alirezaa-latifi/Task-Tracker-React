import { useState } from "react";
import Button from "./Button";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);

    const textOnChange = (e) => {
        setText(e.target.value);
    };

    const dateOnChange = (e) => {
        setDate(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert("Task can't be empty!");
            return;
        } else if (!date) {
            alert("date can't be empty!");
            return;
        }

        onAdd({ text, date, reminder });

        setText("");
        setDate("");
        setReminder(false);
    };

    return (
        <form className="add-task" onSubmit={handleFormSubmit}>
            <div className="input">
                <label className="input__label" htmlFor={"text"}>
                    Task
                </label>
                <input
                    id="text"
                    className="input__input"
                    type="text"
                    placeholder="Enter Task"
                    value={text}
                    onChange={textOnChange}
                />
            </div>
            <div className="input">
                <label className="input__label" htmlFor="date">
                    Day and Time
                </label>
                <input
                    id="date"
                    className="input__input"
                    type="text"
                    placeholder="Enter day and Time"
                    value={date}
                    onChange={dateOnChange}
                />
            </div>
            <div className="add-task__reminder">
                <label
                    className="add-task__reminder-title"
                    htmlFor="task-reminder"
                >
                    Set Reminder
                </label>
                <input
                    id="task-reminder"
                    type="checkbox"
                    checked={reminder}
                    onChange={() => {
                        setReminder(!reminder);
                    }}
                ></input>
            </div>
            <Button onAdd={onAdd}>Save Task</Button>
        </form>
    );
};

export default AddTask;

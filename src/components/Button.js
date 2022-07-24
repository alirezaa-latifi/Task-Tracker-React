import { useState } from "react";

const Button = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (props.children === "Add") {
            setIsOpen(!isOpen);
            props.onOpen(!isOpen);
        }
    };

    return (
        <>
            <button
                onClick={handleClick}
                className={`btn ${
                    (props.children === "Add" &&
                        (isOpen ? "btn--close" : "btn--add")) ||
                    "btn--primary"
                }`}
                type={props.children !== "Add" ? "submit" : "undefiend"}
            >
                {(props.children === "Add" && `${isOpen ? "close" : "Add"}`) ||
                    props.children}
            </button>
        </>
    );
};

export default Button;

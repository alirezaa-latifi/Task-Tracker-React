import Button from "./Button";

const Header = ({ onOpen }) => {
    return (
        <div className="header">
            <h1 className="header__title">Task Tracker</h1>
            <Button onOpen={onOpen}>Add</Button>
        </div>
    );
};

export default Header;

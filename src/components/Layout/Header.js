import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <button>
          <Link to=".." relative="path">
            {" "}
            <div className={classes.arrow}> </div>{" "}
          </Link>{" "}
        </button>{" "}
      </div>{" "}
    </header>
  );
};

export default Header;

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MenuItems = ({ path, icons }) => {
  return (
    <>
      <li>
        <Link to={path}>{icons}</Link>
      </li>
    </>
  );
};

export default MenuItems;

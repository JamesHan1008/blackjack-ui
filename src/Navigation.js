import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Play Game</NavLink>
            <br />
            <NavLink to="/dealers">Manage Dealers</NavLink>
        </div>
    );
};

export default Navigation;

import React from "react";
import authService from "../../services/authService";
import { BiLogOut } from "react-icons/bi";
import "./LogoutButton.scss";

const LogoutButton = ({setToken}) => {
  return (
    <div
      className="app__logout_wrapper"
      onClick={() => authService.logout().then(() => setToken(null))}
    >
      <BiLogOut />
    </div>
  );
};

export default LogoutButton;

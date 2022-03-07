import { useState } from "react";
import "./SignIn.scss";
import authService from "../../services/authService";

export default function Form({ setToken }) {
  const [nameS, setNameS] = useState("");
  const [passwordS, setPasswordS] = useState("");
  const [nameR, setNameR] = useState("");
  const [passwordR, setPasswordR] = useState("");

  const handleNameS = (e) => {
    setNameS(e.target.value);
  };

  const handleNameR = (e) => {
    setNameR(e.target.value);
  };

  const handlePasswordS = (e) => {
    setPasswordS(e.target.value);
  };

  const handlePasswordR = (e) => {
    setPasswordR(e.target.value);
  };

  const handleLogin = async (credentials) => {
    try {
      const token = await authService.login(credentials);
      console.log("Token: ", token);
      localStorage.setItem("appToken", `Bearer ${token}`);
      setToken(token);
    } catch (e) {
      console.log("Login error: ", e);
    }
  };

  const handleRegister = async (credentials) => {
    try {
      await authService.register(credentials);
    } catch (e) {
      console.log("Register error: ", e);
    }
  };

  return (
    <div className="form">
      <div>
        <h1>Sign In</h1>
      </div>
      <form>
        <label className="label">Username</label>
        <input
          onChange={handleNameS}
          className="input"
          value={nameS}
          type="text"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePasswordS}
          className="input"
          value={passwordS}
          type="password"
        />

        <button
          className="btn"
          type="button"
          onClick={() => handleLogin({ username: nameS, password: passwordS })}
        >
          Log In
        </button>
      </form>
      <div>
        <h1>Register</h1>
      </div>
      <form>
        <label className="label">Username</label>
        <input
          onChange={handleNameR}
          className="input"
          value={nameR}
          type="text"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePasswordR}
          className="input"
          value={passwordR}
          type="password"
        />

        <button
          className="btn"
          type="button"
          onClick={() =>
            handleRegister({ username: nameR, password: passwordR }).then(() =>
              handleLogin({ username: nameR, password: passwordR })
            )
          }
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

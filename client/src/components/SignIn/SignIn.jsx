import { useState } from 'react';
import "./SignIn.scss";
 
export default function Form() {
 
  const [nameS, setNameS] = useState('');
  const [passwordS, setPasswordS] = useState('');
  const [nameR, setNameR] = useState('');
  const [passwordR, setPasswordR] = useState('');
  const [setSubmittedS] = useState(false);
  const [setErrorS] = useState(false);
  const [setSubmittedR] = useState(false);
  const [setErrorR] = useState(false);
 
  const handleNameS = (e) => {
    setNameS(e.target.value);
    setSubmittedS(false);
  };
  const handleNameR = (e) => {
    setNameR(e.target.value);
    setSubmittedR(false);
  };
 
  const handlePasswordS = (e) => {
    setPasswordS(e.target.value);
    setSubmittedS(false);
  };
  const handlePasswordR = (e) => {
    setPasswordR(e.target.value);
    setSubmittedR(false);
  };
 
  const handleSubmitS = (e) => {
    e.preventDefault();
    if (nameS === '' || passwordS === '') {
      setErrorS(true);
    } else {
      setSubmittedS(true);
      setErrorS(false);
    }
  };
  const handleSubmitR = (e) => {
    e.preventDefault();
    if (nameR === '' || passwordR === '') {
      setErrorR(true);
    } else {
      setSubmittedR(true);
      setErrorR(false);
    }
  };
 
  return (
    <div className="form">
      <div>
        <h1>Sign In</h1>
      </div>
      <form>
        <label className="label">Username</label>
        <input onChange={handleNameS} className="input"
          value={nameS} type="text" />
 
        <label className="label">Password</label>
        <input onChange={handlePasswordS} className="input"
          value={passwordS} type="password" />
 
        <button onClick={handleSubmitS} className="btn" type="submit">
          Log In
        </button>
      </form>
      <div>
        <h1>Register</h1>
      </div>
      <form>
        <label className="label">Username</label>
        <input onChange={handleNameR} className="input"
          value={nameR} type="text" />
 
        <label className="label">Password</label>
        <input onChange={handlePasswordR} className="input"
          value={passwordR} type="password" />
 
        <button onClick={handleSubmitR} className="btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
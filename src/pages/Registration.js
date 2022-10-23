import React, { useState } from "react";
import "./registration.css";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [Confirm, setConfirm] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleConfirm = (e) => {
    setConfirm(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || name === "" || Confirm === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }

    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (regEx.test(email)) {
      setMessage("Email is valid");
    } else if (!regEx.test(email) && email != "") {
      setMessage("Email is not valid");
    } else {
      setMessage("");
    }

    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    if(validPassword.test(password)) {
      setMessage("Password is accepted");
    }else if(!validPassword.test(password) && password != ""){
      setMessage("password is rejected");
    }else {
      setMessage("");
    }

  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all information</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <h1>Welcome</h1>
      <div className="form-body">
      <div className="name">
          <label className="form__label" for="Name">
            Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="Name"
            placeholder="Name"
            onChange={handleName}
          />
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            className="form__input"
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleEmail}
          />
        </div>


        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form_input"
            type="password"
            id="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </div>

        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form_input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleConfirm}
          />
        </div>
      </div>

      <div class="footer">
        <button type="submit" onClick={handleSubmit} class="btn">
          Register
        </button>
      </div>
      <div className="messages">{errorMessage()}</div>
      <br></br>
      {message}
    </div>
  );
}
//export default Registration;

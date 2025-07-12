import React from "react";
import { useState } from "react";
import registerUser from "../../api/registerUser";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All field must be filled!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Both the passwords must match");
      return;
    }
    registerUser(email, password);
  };
  return (
    <form className="register-form form" onSubmit={handleSubmit}>
      <h4>Register with your Email here and use our services!</h4>
      <div className="form-container">
        <label>Email:</label>
        <input
          type="text"
          placeholder="johndoe@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="******"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;

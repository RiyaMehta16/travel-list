import React from "react";
import { useState } from "react";
import signInUser from "../../api/signInUser";

import { useNavigate } from "react-router-dom";
const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All field must be filled!");
      return;
    }

    await signInUser(email, password, navigate);
    // navigate("/");
  };
  return (
    <form className="signin-form form" onSubmit={handleSubmit}>
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

        <button className="" type="submit">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignInForm;

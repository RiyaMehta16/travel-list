import React from "react";

const AuthButton = ({ label, onClick, span }) => {
  return (
    <div className="auth-btn">
      <p>{span}</p>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default AuthButton;

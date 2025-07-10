import { useNavigate } from "react-router-dom";
import AuthButton from "../components/AuthButton";
import RegisterForm from "../components/forms/RegisterForm";
import Logo from "../components/Logo";
const Register = () => {
  const navigate = useNavigate();
  const handleAuth = () => {
    navigate("/signin");
  };
  return (
    <div className="register-page">
      <Logo name="📝 Register" />
      <RegisterForm />
      <AuthButton
        label="Sign In →"
        span="Already a user?"
        onClick={handleAuth}
      />
    </div>
  );
};

export default Register;

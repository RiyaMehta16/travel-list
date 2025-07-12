import AuthButton from "../components/AuthButton";
import SignInForm from "../components/forms/SignInForm";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const handleAuth = () => {
    navigate("/register");
  };
  return (
    <div className="sign-in-page">
      <Logo name="👩‍💻 Sign In 👩‍💻" />
      <SignInForm />
      <AuthButton
        label="Register as a User →"
        onClick={handleAuth}
        span="Not a user?"
      />
    </div>
  );
};

export default SignIn;

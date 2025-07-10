import { supabase } from "../utils/supabaseClient";

const LogoutButton = () => {
  const handleLogOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <div className="logout-btn">
      <button onClick={handleLogOut}>Log Out→</button>
    </div>
  );
};

export default LogoutButton;

import { supabase } from "../utils/supabaseClient";

const signInUser = async (email, password, navigate) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error("Error Signing In:", error.message);
    return;
  }
  navigate("/home");
};
export default signInUser;

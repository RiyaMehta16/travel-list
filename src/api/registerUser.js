import { supabase } from "../utils/supabaseClient";

const registerUser = async (email, password) => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.error("Error Registering User:", error.message);
    return;
  }
};
export default registerUser;

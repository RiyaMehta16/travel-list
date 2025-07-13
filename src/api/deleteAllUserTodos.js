import getAuthenticatedUser from "../utils/getAuthenticatedUser";
import { supabase } from "../utils/supabaseClient";
const deleteUserTodos = async () => {
  const user = await getAuthenticatedUser();
  if (!user) return [];

  const { error } = await supabase.from("todo").delete().eq("user_id", user.id); // ✅ Supabase will check your RLS policy here

  if (error) console.error("Error deleting all todos:", error.message);
};
export default deleteUserTodos;

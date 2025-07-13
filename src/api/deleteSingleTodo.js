import getAuthenticatedUser from "../utils/getAuthenticatedUser";
import { supabase } from "../utils/supabaseClient";
const deleteSingleTodo = async (id) => {
  const user = getAuthenticatedUser();
  if (!user) return [];

  const { error } = await supabase.from("todo").delete().eq("id", id);

  if (error) {
    console.error("Error updating todo status:", error.message);
  }
};

export default deleteSingleTodo;

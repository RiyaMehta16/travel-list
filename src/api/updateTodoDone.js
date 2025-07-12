import { supabase } from "../utils/supabaseClient";
import getAuthenticatedUser from "../utils/getAuthenticatedUser";
const updateTodoDone = async (listItem) => {
  console.log("listItem:", listItem);
  const user = getAuthenticatedUser();
  if (!user) return [];

  const { error } = await supabase
    .from("todo")
    .update({ done: !listItem.done }) // 🔁 true or false
    .eq("id", listItem.id); // 🆔 match the row to update
  console.log("listItem:", listItem);

  if (error) {
    console.error("Error updating todo status:", error.message);
  }
};
export default updateTodoDone;

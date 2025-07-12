import { supabase } from "../utils/supabaseClient";
import getAuthenticatedUser from "../utils/getAuthenticatedUser";
const insertToList = async (listItem) => {
  const user = await getAuthenticatedUser();
  if (!user) return [];
  // inserting data
  const description = listItem.quantity + " " + listItem.description;
  const { error } = await supabase.from("todo").insert({
    list_item: description,
    done: listItem.done,
    user_id: user.id,
  });
  //check for errors
  if (error) {
    console.error("Error inserting todo:", error.message);
  } else {
    console.log("Inserted todo!");
  }
};

export default insertToList;

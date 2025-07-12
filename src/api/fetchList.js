import { supabase } from "../utils/supabaseClient";
import getAuthenticatedUser from "../utils/getAuthenticatedUser";

// This function fetches the todo list for the currently authenticated user
const fetchList = async () => {
  //step1 and 2 in getAuthenticatedUser
  const user = await getAuthenticatedUser();
  if (!user) return [];

  // Step 3: Fetch todos that belong to this user only
  const { data, error } = await supabase
    .from("todo") // Query the 'todo' table
    .select() // Select all columns
    .eq("user_id", user.id); // Filter rows where user_id matches the current user

  // Step 4: Handle any errors from the fetch query
  if (error) {
    console.error("Error while fetching List", error);
    return []; // Return empty list if query fails
  }

  // Step 5: Return the list of todos for the authenticated user
  console.log("fetched list:", data);
  return data;
};

export default fetchList;

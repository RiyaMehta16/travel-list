// utils/getAuthenticatedUser.js
import { supabase } from "../utils/supabaseClient";

/**
 * Reusable function to get the authenticated user.
 * Optionally handle redirects or error fallback here.
 */
const getAuthenticatedUser = async () => {
  // Step 1: Get the currently authenticated user
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  // Step 2: Handle error if user retrieval fails or user is not logged in
  if (error) {
    console.error("Auth error:", error.message);
    return null;
  }

  if (!user) {
    console.warn("No user is logged in.");
    return null;
  }

  return user;
};

export default getAuthenticatedUser;

import { supabase } from "../utils/supabaseClient";
const fetchList = async () => {
  const { data, error } = await supabase.from("todo").select();
  if (error) {
    console.error("Error while fetching List", error);
    return;
  }
  console.log(data);
  return data;
};
export default fetchList;

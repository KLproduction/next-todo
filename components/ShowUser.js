"use server";
import { createClient } from "@/lib/supabase/server";

const ShowUser = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    <p>no user</p>;
  }
  return <div>Hello{data.user.email}</div>;
};

export default ShowUser;

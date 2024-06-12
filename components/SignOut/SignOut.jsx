"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

const SignOut = async () => {
  const supabase = createClient();

  const {error } = await supabase.auth.signOut();
  if (error) {
    redirect("/");
  }
  revalidatePath("/", "layout");
  redirect("/");
};

export default SignOut;

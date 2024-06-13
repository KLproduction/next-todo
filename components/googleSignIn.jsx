import { signIn } from "@/auth";
import { Button } from "./ui/button";

export function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google",{redirectTo:"/"});
      }}
    >
      <Button asChild>
        <button type="submit">Signin with Google</button>
      </Button>
    </form>
  );
}

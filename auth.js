import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./app/data/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Google,
    GitHub,
    Credentials({
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const user = getUserByEmail(credentials?.email);

          if (user) {
            const isMatch = user?.password === credentials?.password;
            if (isMatch) {
              return user;
            } else {
              throw new Error("Check your password");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (e) {
          throw new Error(e);
        }
      },
    }),
  ],
});

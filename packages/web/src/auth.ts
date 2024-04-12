import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { type: "email", label: "Email" },
        password: { type: "password", label: "Password" },
      },
      authorize: async (credentials:any) => {
        let user: User | null = null
 
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
 
        // logic to verify if user exists
        // user = await getUserFromDb(credentials.email, pwHash)
        user = credentials;
        user = null;
        if (!user) {
          throw new Error("User not found.")
        }
 
        // return json object with the user data
        return user;
      },
    }),
  ],
})
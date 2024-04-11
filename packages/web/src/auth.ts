import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null
 
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
 
        // logic to verify if user exists
        // user = await getUserFromDb(credentials.email, pwHash)
 
        // if (!user) {
        //   throw new Error("User not found.")
        // }
 
        // return json object with the user data
        return credentials;
      },
    }),
  ],
})
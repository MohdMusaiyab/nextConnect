import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        const email = credentials.email;
        const password = credentials.password;
        console.log("Email: ", email);
        console.log("Password", password);
        //Find the user in the database
        const user = await prisma.user.findUnique({ where: { email } });
        //If the user is not found, return an error message
        console.log("User: ", user);
        if (!user) {
          return null;
        }
        //If the user is found, compare the password using bcrypt
        //If the password is incorrect, return an error message
        const passwordMatch = await compare(password, user.password);
        console.log("Password Match: ", passwordMatch);
        if (!passwordMatch) {
          return null;
        }
        //If the password is correct, return the user and also the id along with JWT token
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };

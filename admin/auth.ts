import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user) {
          throw new Error("Invalid credentials");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },

  secret: process.env.AUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
});

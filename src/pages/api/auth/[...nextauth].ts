import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth/index";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import login from "@/lib/login";
import { NextApiRequest, NextApiResponse } from "next";

const authOptions = (): NextAuthOptions => ({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "text" },
      },
      async authorize(credentials, req) {
        if (credentials === null || credentials === undefined) {
          return null;
        }
        try {
          const { user, jwt } = await login({
            email: credentials.email,
            password: credentials.password,
          });

          return { ...user, jwt };
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.JWT_SECRET,

  session: { strategy: "jwt" },

  callbacks: {
    async session({ session, token, user }) {
      session.user.jwt = token.jwt;
      session.user.id = token.id;
      session.user.image = token.picture;
      session.user.name = token.name;
      session.user.email = token.email;
      return Promise.resolve(session);
    },

    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account?.provider}/callback?access_token=${account?.access_token}`
        );
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.id;
        token.avatar = data?.user?.image;
      }
      return Promise.resolve(token);
    },
  },
});

// @ts-ignore
export default NextAuth(authOptions());
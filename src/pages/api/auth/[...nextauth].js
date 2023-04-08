import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
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
        if (credentials == null) return null;

        try {
          const { user, jwt } = await signIn({
            email: credentials.email,
            password: credentials.password,
          });
          return { ...user, jwt };
        } catch {
          return null;
        }
      },
    }),
  ],
  pages:{
    signIn: "/login"
  },
  secret: process.env.JWT_SECRET,

  session: { strategy: "jwt" },

  callbacks: {
    async session({ session, token, user }) {
      session.user.jwt = token.jwt;
      session.user.id = token.id;
      return session;
    },

    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account?.provider}/callback?access_token=${account?.access_token}`
        );
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
        token.avatar = data.user.image;
      }
      return token;
    },
  },
});

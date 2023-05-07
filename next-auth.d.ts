import NextAuth from "next-auth";
import { DefaultSession } from "next-auth/index";

declare module "next-auth/" {
  interface Session {
    user: {
      jwt?: string;
      id?: string;
    } & DefaultSession["user"];
  }

}

import NextAuth from "next-auth";
import { DefaultSession } from "next-auth/index";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth/" {
  interface Session {
    user: {
      jwt?: string | any;
      id?: string | any;
    } & DefaultSession["user"];
  }


}

export default NextAuth
// pages/api/verify-otp.ts
import OTPHandler from "@/lib/otphandler";
import type { NextApiRequest, NextApiResponse } from "next";

const otpHandler = new OTPHandler();

export default async function VerifyOtp (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { countryCode, phone, otp } = req.body;
    try {
      const isVerified = await otpHandler.verifyOTP(countryCode, phone, otp);
      res.status(200).json({ verified: isVerified });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
};

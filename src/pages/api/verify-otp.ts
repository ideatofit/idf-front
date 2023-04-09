// pages/api/verify-otp.ts
import OTPHandler from "@/lib/otphandler";
import type { NextApiRequest, NextApiResponse } from "next";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_ID;
const otpHandler = new OTPHandler({ accountSid, authToken, serviceSid });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { countryCode, phone, otp } = req.body;
    try {
      const isVerified = await otpHandler.verifyOTP(countryCode, phone, otp);
      console.log(isVerified)
      res.status(200).json({ verified: isVerified });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
};

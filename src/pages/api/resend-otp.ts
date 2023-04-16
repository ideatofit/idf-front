import OTPHandler from '@/lib/otphandler';
import type { NextApiRequest, NextApiResponse } from 'next';

const otpHandler = new OTPHandler();

export default async function ResendOtp (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { countryCode, phone } = req.body;

    try {
      await otpHandler.resendOTP(countryCode, phone);
      res.status(200).json({ success: true });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
};
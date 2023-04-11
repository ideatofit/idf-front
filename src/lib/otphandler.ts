import twilio from 'twilio';

class OTPHandler {
  private client: twilio.Twilio;
  private accountSid: string = process.env.TWILIO_ACCOUNT_SID
  private authToken: string = process.env.TWILIO_AUTH_TOKEN
  private serviceSid: string = process.env.TWILIO_SERVICE_ID

  constructor() {
    this.client = twilio(this.accountSid, this.authToken);
    this.serviceSid = this.serviceSid;
  }

  async sendOTP(countryCode: string, phone: string) {
    try {
      const verification = await this.client.verify.services(this.serviceSid)
        .verifications
        .create({to: `+${countryCode}${phone}`, channel: 'sms'});
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to send OTP: ${error.message}`);
      } else {
        throw new Error('Failed to send OTP');
      }
    }
  }

  async verifyOTP(countryCode: string, phone: string, userOTP: string) {
    try {
      const verification_check = await this.client.verify.services(this.serviceSid)
        .verificationChecks
        .create({to: `+${countryCode}${phone}`, code: userOTP});
      return verification_check.status === 'approved';
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to verify OTP: ${error.message}`);
      } else {
        throw new Error('Failed to verify OTP');
      }
    }
  }

  async resendOTP(countryCode: string, phone: string) {
    await this.client.verify
      .services(this.serviceSid)
      .verifications.create({
        to: `+${countryCode}${phone}`,
        channel: 'sms',
      });
  }
}

export default OTPHandler;
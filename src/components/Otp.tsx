import React, { useState, useRef } from 'react';

interface OtpProps {
  onVerify: () => void;
  countryCode: string;
  phone: string;
}

function Otp({ onVerify, countryCode, phone }: OtpProps) {
  const [userOTP, setUserOTP] = useState(['', '', '', '']);
  const [activeInput, setActiveInput] = useState(0);
  const [isResended, setIsResended] = useState(false);
  const [changePhoneNumber, setChangedPhoneNumber] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [counter, setCounter] = useState(90);

  const handleVerify = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const response = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        countryCode: countryCode,
        phone: phone,
        otp: userOTP.join(''),
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.verified) {
      onVerify();
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  };

  const handleResend = async () => {
    if (counter === 0) {
      try {
        const response = await fetch('/api/resend-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            countryCode: countryCode,
            phone: phone,
          }),
        });
        if (response.ok) {
          setIsResended(true);
          setCounter(90);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  React.useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  const handleInput = (index: number, value: string) => {
    setUserOTP((prevUserOTP) => {
      const newUserOTP = [...prevUserOTP];
      newUserOTP[index] = value;
      return newUserOTP;
    });
    if (value && index < userOTP.length - 1) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number) => {
    if (!userOTP[index] && index > 0) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="fixed h-full w-full bg-transparent grid place-items-center z-50">
      <div className="bg-transparent flex max-h-full min-w-full flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-MidnightOcean text-white border-2 border-borderColor px-6 pt-10 pb-9 shadow-xl mx-auto w-[80%] max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>OTP Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>
                  We have sent a code to your phone{' '}
                  {phone.slice(0, 2) + '******' + phone.slice(8)}
                </p>
              </div>
            </div>
            <div>
              <form action="" method="post">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row items-center justify-around mx-auto w-full">
                    {userOTP.map((value, index) => (
                      <div key={`otpInputForm${index}`} className="w-16 h-16 ">
                        <input
                          ref={(el) => (inputRefs.current[index] = el)}
                          onFocus={() => setActiveInput(index)}
                          className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-Midnight text-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="number"
                          name=""
                          id=""
                          maxLength={1}
                          value={value}
                          onChange={(e) => handleInput(index, e.target.value)}
                          onKeyDown={(e) =>
                            e.key === 'Backspace' && handleBackspace(index)
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <button
                        onClick={handleVerify}
                        className="flex flex-row items-center justify-center text-center py-4 w-full border rounded-xl outline-none bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Verify OTP
                      </button>
                    </div>
                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <div>
                        {!isResended
                          ? "Didn't receive code?"
                          : 'Code has been sent to you'}
                      </div>
                      <div
                        onClick={handleResend}
                        className="flex flex-row items-center text-blue-600 cursor-pointer"
                      >
                        {isResended ? counter : 'Resend'}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
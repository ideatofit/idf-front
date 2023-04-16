import qs from "qs";

export const handleBcmCoach = async (
  email: string,
  phone: string,
  countrycode: string,
  fullName: string,
  Message: string
) => {
  const url = `https://server.ideatofit.com/api/becomeacoaches`;
  const postData = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: { email, phone, countrycode, fullName, Message },
    }),
  });
  if (postData.ok) {
    alert("we will look into your request");
  } else {
    alert("something went wrong");
  }
};

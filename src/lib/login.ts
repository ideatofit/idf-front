async function login({ email, password }: { email: string; password: string }) {
  try {
    const postUser = await fetch(
      "https://server.ideatofit.com/api/auth/local",
      {
        method: "POST",
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const response = await postUser.json();
    return response;
  } catch (err) { return null }
}

export default login;

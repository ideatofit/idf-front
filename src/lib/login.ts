type CredTypes = {
  email: string;
  password: string;
}

async function login({ email, password }: CredTypes) {
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
    if(postUser.ok){
      const user = await postUser.json();
      return user;
    } else return null
  } catch (err) { return null }
}

export default login;
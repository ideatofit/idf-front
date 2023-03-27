import qs from "qs";

type GoalData = {
  data: {
    id: number;
    attributes: {
      Goals: string;
    };
  }[];
};

export type GoalProps = {
  goals: string[];
};

let goalData: GoalData;

export async function getGoals(filter = false) {
  const url = `https://server.ideatofit.com/api/goals`;
  const fetchData = await fetch(url);
  const parsedData: GoalData = await fetchData.json();
  goalData = parsedData;
  const filteredData = {
    goals: parsedData["data"].map((data) => {
      return data["attributes"]["Goals"];
    }),
  };
  return filteredData;
}

const userInfo = async (
  goal: string | string[],
  height: number,
  age: number,
  gender: "Male" | "Female",
  weight: number,
  phone: string,
  userId: number,
  authToken: string
) => {
  await getGoals();
  let goalId: number[] = [];
  if (goal.length > 0) {
    goalId = goalData.data
      .filter((data) => {
        return data["attributes"]["Goals"] === goal;
      })
      .map((data) => {
        return data["id"];
      });
  }

  if (height > 400 && height < 0) return null;

  if (age < 16 && age > 100) return null;

  if (gender !== "Male" || "Female") return null;

  if (weight < 25 && weight > 100) return null;

  const payload = { goal: { connect: goalId }, height, age, gender, weight, phone };

  const url = `https://server.ideatofit.com/api/users/${userId}`
  const uploadData = await fetch(url, {
    method: "POST",
    headers: {
      'Content/type': "application/json",
      'Authentication': `Bearer ${authToken}`,
      body: JSON.stringify(payload)
    }
  })
  const parsedData = await uploadData.json()
  console.log(parsedData)
};

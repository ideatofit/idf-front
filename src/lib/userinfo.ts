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
  goals: string;
  id: number;
}[];

let goalData: GoalData;

export async function getGoals(filter = false) {
  const query = qs.stringify({
    sort: 'id',
    order: 'createdAt'
  })
  const url = `https://server.ideatofit.com/api/goals?${query}`;
  const fetchData = await fetch(url);
  const parsedData: GoalData = await fetchData.json();
  goalData = parsedData;
  const filteredData: GoalProps = parsedData["data"].map((data) => {
    return {
      goals: data["attributes"]["Goals"],
      id: data["id"],
    };
  });
  return filteredData;
}

export const submitData = async (payload: {
  goal: { connect: number[] };
  height: number;
  age: number;
  weight: number;
}, session: any) => {
  // First, validate the payload to make sure all values are valid
  // For example:
  if (payload.height <= 0 || payload.age <= 0 || payload.weight <= 0) {
    // Invalid values in payload
    // Don't send data to server
    return;
  }

  // If all values in the payload are valid, send data to server
  const url = `https://server.ideatofit.com/api/users/${session?.user?.id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log(JSON.stringify(payload))
    if (response.ok) {
      console.log(response)
    } else {
      console.log(response)
    }
  } catch (error) {
    // An error occurred while sending data to server
    // Handle error here
  }
};

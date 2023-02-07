import { json } from "react-router-dom";

export const loadEvent = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event!" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};

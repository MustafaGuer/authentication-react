import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";

import { loadEvents } from "../utilities/loadEvents";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};

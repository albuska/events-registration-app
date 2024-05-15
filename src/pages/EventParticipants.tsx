import { EventParticipantsChart } from "../components/EventParticipantsChart";
import { EventParticipantsList } from "../components/EventParticipantsList";

const EventParticipants = () => {
  return (
    <div className="flex flex-col gap-20">
      <EventParticipantsList />
      <EventParticipantsChart />
    </div>
  );
};

export default EventParticipants;

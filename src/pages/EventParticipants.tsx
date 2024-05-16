import { EventParticipantsChart } from "../components/EventParticipantsChart";
import { EventParticipantsList } from "../components/EventParticipantsList";

const EventParticipants = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <EventParticipantsList />
      <EventParticipantsChart />
    </div>
  );
};

export default EventParticipants;

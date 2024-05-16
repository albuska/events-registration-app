import { EventRegistrationFormTitle } from "../EventRegistrationForm/EventRegistrationForm.styles";
import {
  EventBoardItem,
  EventBoardItemDescription,
  EventBoardItemTitle,
  EventsBoardList,
} from "../EventsBoard/eventsBoard.styles";
import { EventParticipantsListContainer } from "./EventParticipantsList.styles";
import events from "../../../events.json";
import { IEvent } from "../../models";

const EventParticipantsList = () => {
  return (
    <EventParticipantsListContainer>
      <EventRegistrationFormTitle className="font-gravity text-center">
        {"Awesome event"} participants
      </EventRegistrationFormTitle>
      <EventsBoardList>
        {events.map((event: IEvent) => (
          <EventBoardItem key={event.id}>
            <EventBoardItemTitle className="font-gravity">
              {event.title}
            </EventBoardItemTitle>
            <EventBoardItemDescription className="font-konnect">
              {event.description}
            </EventBoardItemDescription>
          </EventBoardItem>
        ))}
      </EventsBoardList>
    </EventParticipantsListContainer>
  );
};

export default EventParticipantsList;

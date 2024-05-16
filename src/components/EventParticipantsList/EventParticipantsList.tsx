import { EventRegistrationFormTitle } from "../EventRegistrationForm/EventRegistrationForm.styles";
import {
  EventBoardItemDescription,
  EventBoardItemTitle,
  EventsBoardList,
} from "../EventsBoard/eventsBoard.styles";
import {
  EventParticipantsListContainer,
  EventParticipantsListItem,
} from "./EventParticipantsList.styles";
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
          <EventParticipantsListItem key={event.id}>
            <EventBoardItemTitle className="font-gravity">
              {event.title}
            </EventBoardItemTitle>
            <EventBoardItemDescription className="font-konnect">
              {event.description}
            </EventBoardItemDescription>
          </EventParticipantsListItem>
        ))}
      </EventsBoardList>
    </EventParticipantsListContainer>
  );
};

export default EventParticipantsList;

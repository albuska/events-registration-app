import { useParams } from "react-router-dom";
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
import { IParticipant } from "../../models";
import { useEffect, useState } from "react";
import { getParticipants } from "../../services/api";
import { Loader } from "../Loader";

const EventParticipantsList = () => {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (eventId === undefined) return;
    setIsLoading(true);

    getParticipants(eventId)
      .then(({ result }) => {
        console.log(result, 'result');
        setParticipants(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [eventId]);

  return (
    <EventParticipantsListContainer>
      <EventRegistrationFormTitle className="font-gravity text-center">
        {"Awesome event"} participants
      </EventRegistrationFormTitle>
      {isLoading ? (
        <Loader />
      ) : participants.length > 0 ? (
        <EventsBoardList>
          {participants.map((participant: IParticipant) => (
            <EventParticipantsListItem key={participant._id}>
              <EventBoardItemTitle className="font-gravity">
                {participant.fullName}
              </EventBoardItemTitle>
              <EventBoardItemDescription className="font-konnect">
                {participant.email}
              </EventBoardItemDescription>
            </EventParticipantsListItem>
          ))}
        </EventsBoardList>
      ) : (
        <EventRegistrationFormTitle className="font-gravity text-center">
          There is no participant
        </EventRegistrationFormTitle>
      )}
    </EventParticipantsListContainer>
  );
};

export default EventParticipantsList;

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
  SearchIcon,
  SearchInput,
  SearchInputBox,
} from "./EventParticipantsList.styles";
import { IEvent, IParticipant } from "../../models";
import { useEffect, useState } from "react";
import { getEventById, getParticipants } from "../../services/api";
import { Loader } from "../Loader";
import { useDebounce } from "../../hooks";

const EventParticipantsList = () => {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [event, setEvent] = useState<IEvent>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const debouncedSearchQuery = useDebounce(searchQuery, 700);

  useEffect(() => {
    if (eventId === undefined) return;
    setIsLoading(true);

    getEventById(eventId)
      .then(({ result }) => {
        setEvent(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [eventId]);

    useEffect(() => {
      if (!eventId) return;

      setIsLoading(true);

      getParticipants(eventId, debouncedSearchQuery)
        .then(({ result }) => {
          setParticipants(result);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [eventId, debouncedSearchQuery]);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value); 
    };

  return (
    <EventParticipantsListContainer>
      <EventRegistrationFormTitle className="font-gravity text-center">
        {event && event.title}{" "}
        <span style={{ color: "var(--main-color)" }}>participants</span>
      </EventRegistrationFormTitle>
      <SearchInputBox>
        <SearchInput
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search participant by email or title"
          type="text"
          className="font-gravity"
        />
        <SearchIcon
          name="icon-search"
          className="icon-search"
          width={15}
          height={15}
        />
        {/* <SearchBtn
              className="font-konnect search-btn"
              onClick={handleSearch}
              disabled={isLoading}
            >
              Search
            </SearchBtn> */}
      </SearchInputBox>
      {isLoading ? (
        <Loader />
      ) : participants.length > 0 ? (
        <div>
          <EventsBoardList>
            {participants.map((participant: IParticipant) => (
              <EventParticipantsListItem key={participant._id}>
                <EventBoardItemTitle className="font-gravity">
                  {participant.fullName}
                </EventBoardItemTitle>
                <EventBoardItemDescription className="font-konnect text-center">
                  {participant.email}
                </EventBoardItemDescription>
              </EventParticipantsListItem>
            ))}
          </EventsBoardList>
        </div>
      ) : (
        <EventRegistrationFormTitle className="font-gravity text-center">
          There is no participant
        </EventRegistrationFormTitle>
      )}
    </EventParticipantsListContainer>
  );
};

export default EventParticipantsList;

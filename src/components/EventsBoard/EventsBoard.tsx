import { Pagination } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import {
  EventBoardBottomBox,
  EventBoardItem,
  EventBoardItemDate,
  EventBoardItemDescription,
  EventBoardItemOrganizer,
  EventBoardItemRegisterBtn,
  EventBoardItemTitle,
  EventBoardTitle,
  EventDetailsInfoBox,
  EventsBoardContainer,
  EventsBoardList,
  SortedBox,
  SortedContainer,
  SortedLabel,
  SortedOption,
  SortedSelect,
} from "./eventsBoard.styles";
import { IEvent } from "../../models";
import { getEvents } from "../../services/api";
import { Loader } from "../Loader";
import { formatDate } from "../../utils";

const itemsPerPage = 10;

const EventsBoard = () => {
  const [page, setPage] = useState<number>(1);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("title");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  const handleChange = (
    event: ChangeEvent<unknown>,
    value: number | undefined
  ) => {
    console.log(event);
    if (value === undefined) return;
    setPage(value);
  };

  useEffect(() => {
    setIsLoading(true);

    getEvents(sortBy, sortOrder)
      .then(({ result }) => {
        setEvents(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [sortBy, sortOrder]);

  const pageCount = Math.ceil(events.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, events.length - 1);

  const displayedEvents = events.slice(startIndex, endIndex + 1);

  return (
    <EventsBoardContainer>
      <EventBoardTitle className="font-gravity">Events</EventBoardTitle>
      {isLoading ? (
        <Loader />
      ) : events.length > 0 ? (
        <>
          <SortedContainer>
            <SortedBox>
              <SortedLabel className="font-gravity">Sort by:</SortedLabel>
              <SortedSelect
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <SortedOption value="title">Title</SortedOption>
                <SortedOption value="eventDate">Event Date</SortedOption>
                <SortedOption value="organizer">Organizer</SortedOption>
              </SortedSelect>
            </SortedBox>

            <SortedBox>
              <SortedLabel className="font-gravity">Order:</SortedLabel>
              <SortedSelect
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <SortedOption value="asc">Ascending</SortedOption>
                <SortedOption value="desc">Descending</SortedOption>
              </SortedSelect>
            </SortedBox>
          </SortedContainer>
          <EventsBoardList>
            {displayedEvents.map((event: IEvent) => (
              <EventBoardItem key={event._id}>
                <EventBoardItemTitle className="font-gravity">
                  {event.title}
                </EventBoardItemTitle>
                <EventBoardItemDescription className="font-konnect">
                  {event.description}
                </EventBoardItemDescription>
                <EventDetailsInfoBox>
                  <EventBoardItemOrganizer className="font-konnect">
                    {event.organizer}
                  </EventBoardItemOrganizer>
                  <EventBoardItemDate className="font-konnect">
                    {formatDate(event.event_date)}
                  </EventBoardItemDate>
                </EventDetailsInfoBox>
                <EventBoardBottomBox>
                  <EventBoardItemRegisterBtn
                    to={`/registration/${event._id}`}
                    className="font-konnect transition-all"
                    data-event-id={event._id}
                  >
                    Register
                  </EventBoardItemRegisterBtn>
                  <EventBoardItemRegisterBtn
                    to={`/participants/${event._id}`}
                    className="font-konnect"
                    data-event-id={event._id}
                  >
                    View
                  </EventBoardItemRegisterBtn>
                </EventBoardBottomBox>
              </EventBoardItem>
            ))}
          </EventsBoardList>
        </>
      ) : (
        <EventBoardTitle className="font-gravity">
          There is no event
        </EventBoardTitle>
      )}
      {events.length > 0 && (
        <Pagination
          className="MuiPaginationItem-root"
          count={pageCount}
          page={page}
          onChange={handleChange}
          defaultPage={page}
        />
      )}
    </EventsBoardContainer>
  );
};

export default EventsBoard;

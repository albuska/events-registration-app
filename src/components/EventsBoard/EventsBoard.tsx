import { Pagination } from "@mui/material";
import { ChangeEvent, useState } from "react";
import {
  EventBoardBottomBox,
  EventBoardItem,
  EventBoardItemDescription,
  EventBoardItemRegisterBtn,
  EventBoardItemTitle,
  EventBoardTitle,
  EventsBoardContainer,
  EventsBoardList,
} from "./eventsBoard.styles";
import events from "../../../events.json";
import { IEvent } from "../../models";

const itemsPerPage = 10;

const EventsBoard = () => {
  const [page, setPage] = useState<number>(1);
  const [totalItems] = useState<number>(events.length);

  const handleChange = (
    event: ChangeEvent<unknown>,
    value: number | undefined
  ) => {
    console.log(event);
    if (value === undefined) return;
    setPage(value);
  };

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);

  const displayedItems = events.slice(startIndex, endIndex + 1);

  return (
    <EventsBoardContainer>
      <EventBoardTitle className="font-gravity">Events</EventBoardTitle>
      <EventsBoardList>
        {displayedItems.map((event: IEvent) => (
          <EventBoardItem key={event.id}>
            <EventBoardItemTitle className="font-gravity">
              {event.title}
            </EventBoardItemTitle>
            <EventBoardItemDescription className="font-konnect">
              {event.description}
            </EventBoardItemDescription>
            <EventBoardBottomBox>
              <EventBoardItemRegisterBtn
                to="registration"
                className="font-konnect transition-all"
              >
                Register
              </EventBoardItemRegisterBtn>
              <EventBoardItemRegisterBtn
                to="participants"
                className="font-konnect"
              >
                View
              </EventBoardItemRegisterBtn>
            </EventBoardBottomBox>
          </EventBoardItem>
        ))}
      </EventsBoardList>
      <Pagination
        className="MuiPaginationItem-root"
        count={pageCount}
        page={page}
        onChange={handleChange}
        defaultPage={page}
      />
    </EventsBoardContainer>
  );
};

export default EventsBoard;

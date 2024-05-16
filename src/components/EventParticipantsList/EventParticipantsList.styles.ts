import styled from "styled-components";
import { EventBoardItem } from "../EventsBoard/eventsBoard.styles";

export const EventParticipantsListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const EventParticipantsListStyled = styled.ul``;

export const EventParticipantsListItem = styled(EventBoardItem)`
  height: auto;
`;

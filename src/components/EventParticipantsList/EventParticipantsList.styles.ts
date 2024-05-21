import styled from "styled-components";
import { EventBoardItem } from "../EventsBoard/eventsBoard.styles";
import { Icon } from "../Icon";

export const EventParticipantsListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const EventParticipantsListStyled = styled.ul``;

export const EventParticipantsListItem = styled(EventBoardItem)`
  height: auto;
`;

export const SearchInputBox = styled.div`
  width: 100%;
  position: relative;

  &:hover {
    input {
      border-color: var(--accent-color);
    }
    .icon-search {
      stroke: var(--accent-color);
    }
  }
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  left: 10px;
  top: 12px;
  stroke: var(--main-color);
  fill: transparent;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  color: var(--main-color);
  background-color: transparent;
  padding: 10px;
  margin-bottom: 20px;
  padding-left: 35px;
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 7px;
  width: 70px;
  height: 25px;
  border-radius: 8px;
  background-color: var(--main-color);
  color: var(--second-color);

  &:hover {
    background-color: var(--accent-color);
  }
`;

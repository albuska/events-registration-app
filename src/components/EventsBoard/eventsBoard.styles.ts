import { Link } from "react-router-dom";
import styled from "styled-components";

export const EventsBoardContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  .MuiPaginationItem-root {
    color: rgba(255, 255, 255, 0.17);
    font-size: 20px;
    font-weight: 400;
  }

  .MuiPaginationItem-root:focus {
    color: #ffffff;
  }

  .MuiPaginationItem-icon {
    width: 25px;
    height: 25px;
    fill: var(--accent-color);
  }

  .Mui-selected {
    color: #ffffff;
  }
`;

export const EventsBoardList = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--accent-color);
  gap: 50px;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const EventBoardItem = styled.li`
  border: 1px solid var(--main-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: calc(100% / 4);
  }
`;

export const EventBoardTitle = styled.h1`
  color: var(--accent-color);
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 15px;
`;

export const EventBoardItemTitle = styled.h2`
  max-width: 200px;
  color: var(--accent-color);
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const EventBoardItemDescription = styled.p`
  color: var(--main-color);
`;

export const EventDetailsInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const EventBoardItemOrganizer = styled.p`
  color: #005792;
`;

export const EventBoardItemDate = styled.p`
  color: #005792;
`;

export const EventBoardBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const EventBoardItemRegisterBtn = styled(Link)`
  padding: 2px 10px;
  color: var(--accent-color);
  font-weight: 500;
  border: 1px solid #393e46;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border-color: var(--accent-color);
  }
`;

export const SortedContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
  }
`;

export const SortedBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SortedLabel = styled.label`
  font-size: 20px;
  font-weight: 500;
  color: var(--main-color);
`;

export const SortedSelect = styled.select`
  background-color: transparent;
  border: 1px solid var(--main-color);
  padding: 3px 5px;
  color: var(--main-color);
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
`;

export const SortedOption = styled.option`
  background-color: #393e46;
`;

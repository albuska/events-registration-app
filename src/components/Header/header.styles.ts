import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 12px;
  padding-right: 12px;

  @media (min-width: 768px) {
    padding-left: 23px;
    padding-right: 23px;
  }

  @media (min-width: 1024px) {
    padding-left: 29px;
    padding-right: 29px;
  }

  @media (min-width: 1512px) {
    width: 1512px;
    padding-left: 61px;
    padding-right: 61px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HeaderNavLinkItem = styled.li``;

export const HeaderNavLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: var(--main-color);
  cursor: pointer;

  &.active,
  &:hover {
    color: var(--accent-color);
  }

  .dark &.active {
    color: var(--accent-color);
  }
`;

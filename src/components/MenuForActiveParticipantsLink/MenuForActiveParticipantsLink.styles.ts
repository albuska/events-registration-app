import styled from "styled-components";

interface IProps {
  active?: boolean;
}

export const MenuForActiveParticipantsLinkBtn = styled.button<IProps>`
  color: ${({ active }) =>
    active ? "var(--accent-color)" : "var(--main-color)"};
  cursor: pointer;

  &:hover {
    color: var(--accent-color);
  }
`;

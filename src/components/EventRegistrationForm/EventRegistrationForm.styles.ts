import styled from "styled-components";

interface IProps {
  $error?: "true" | "false";
}

export const EventRegistrationFormContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const EventRegistrationFormTitle = styled.h1`
  color: var(--accent-color);
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 15px;
`;

export const EventRegistrationFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const EventRegistrationFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  color: var(--accent-color);

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

export const EventRegistrationFormInput = styled.input<IProps>`
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid
    ${({ $error }) =>
      $error === "true" ? "var(--error-color)" : "var(--main-color)"};
  color: var(--main-color);
  font-size: 18px;

  &:hover,
  &:focus {
    border-color: var(--accent-color);
  }
`;

export const InputErrorMessage = styled.p`
  color: var(--error-color);
`;

export const EventRegistrationFormBtn = styled(EventRegistrationFormInput)`
  background-color: #142d4c;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--accent-color);
    background-color: #393e46;
  }
`;

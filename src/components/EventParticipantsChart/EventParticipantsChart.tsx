import { EventRegistrationFormTitle } from "../EventRegistrationForm/EventRegistrationForm.styles";
import { EventParticipantsChartContainer } from "./EventParticipantsChart.styles";
import imgDevelopment from "../../assets/images/development.webp";
const EventParticipantsChart = () => {
  return (
    <EventParticipantsChartContainer>
      <EventRegistrationFormTitle className="font-gravity text-center">
        This page is under development
      </EventRegistrationFormTitle>
      <img
        src={imgDevelopment}
        alt="ImgDevelopment"
        width={500}
        height={"auto"}
      />
    </EventParticipantsChartContainer>
  );
};

export default EventParticipantsChart;

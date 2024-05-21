import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {
  EventRegistrationFormBtn,
  EventRegistrationFormContainer,
  EventRegistrationFormInput,
  EventRegistrationFormLabel,
  EventRegistrationFormStyled,
  EventRegistrationFormTitle,
  InputErrorMessage,
} from "./EventRegistrationForm.styles";
import { ESelectedRadio, IFormInputs } from "../../models";
import { schema } from "../../constants";
import { addParticipant } from "../../services/api";

const EventRegistrationForm = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      selectedRadio: ESelectedRadio.SOCIAL_MEDIA,
      event: eventId,
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      await addParticipant(data);
      navigate("/");
    } catch (error) {
      console.error("Error adding participant:", error);
    }
  };

  return (
    <EventRegistrationFormContainer>
      <EventRegistrationFormTitle className="font-gravity">
        Event registration
      </EventRegistrationFormTitle>
      <EventRegistrationFormStyled onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" value={eventId} {...register("event")} />
        <EventRegistrationFormLabel className="font-konnect">
          Full name
          <EventRegistrationFormInput
            $error={errors.fullName ? "true" : "false"}
            className="transition-all font-gravity"
            {...register("fullName", { maxLength: 20 })}
          />
          <InputErrorMessage className="font-konnect">
            {errors.fullName?.message}
          </InputErrorMessage>
        </EventRegistrationFormLabel>
        <EventRegistrationFormLabel className="font-konnect">
          Email
          <EventRegistrationFormInput
            $error={errors.email ? "true" : "false"}
            className="transition-all font-gravity"
            {...register("email")}
          />
          <InputErrorMessage className="font-konnect">
            {errors.email?.message}
          </InputErrorMessage>
        </EventRegistrationFormLabel>
        <EventRegistrationFormLabel className="font-konnect">
          Date of birth
          <EventRegistrationFormInput
            $error={errors.dateOfBirth ? "true" : "false"}
            className="transition-all font-gravity"
            type="date"
            {...register("dateOfBirth")}
            lang="en"
          />
          <InputErrorMessage className="font-konnect">
            {errors.dateOfBirth?.message}
          </InputErrorMessage>
        </EventRegistrationFormLabel>
        <EventRegistrationFormLabel className="font-konnect">
          Where did you hear about this event?
        </EventRegistrationFormLabel>
        <Controller
          rules={{ required: true }}
          control={control}
          name="selectedRadio"
          render={({ field }) => {
            return (
              <RadioGroup
                {...field}
                name="radio-buttons-group"
                aria-labelledby="demo-radio-buttons-group-label"
              >
                <FormControlLabel
                  sx={{
                    color: "#ffffff",
                    "&.Mui-checked": {
                      color: "#64ffda",
                    },
                  }}
                  value={ESelectedRadio.SOCIAL_MEDIA}
                  control={
                    <Radio
                      sx={{
                        color: "#ffffff",
                        "&.Mui-checked": {
                          color: "#64ffda",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="font-konnect">
                      {ESelectedRadio.SOCIAL_MEDIA.charAt(0).toUpperCase() +
                        ESelectedRadio.SOCIAL_MEDIA.slice(1)}
                    </span>
                  }
                />
                <FormControlLabel
                  sx={{
                    color: "#ffffff",
                    "&.Mui-checked": {
                      color: "#64ffda",
                    },
                  }}
                  value={ESelectedRadio.FRIENDS}
                  control={
                    <Radio
                      sx={{
                        color: "#ffffff",
                        "&.Mui-checked": {
                          color: "#64ffda",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="font-konnect">
                      {ESelectedRadio.FRIENDS.charAt(0).toUpperCase() +
                        ESelectedRadio.FRIENDS.slice(1)}
                    </span>
                  }
                />
                <FormControlLabel
                  sx={{
                    color: "#ffffff",
                    "&.Mui-checked": {
                      color: "#64ffda",
                    },
                  }}
                  value={ESelectedRadio.FOUND_MYSELF}
                  control={
                    <Radio
                      sx={{
                        color: "#ffffff",
                        "&.Mui-checked": {
                          color: "#64ffda",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="font-konnect">
                      {ESelectedRadio.FOUND_MYSELF.charAt(0).toUpperCase() +
                        ESelectedRadio.FOUND_MYSELF.slice(1)}
                    </span>
                  }
                />
              </RadioGroup>
            );
          }}
        />
        <EventRegistrationFormBtn
          className="font-gravity transition-all"
          type="submit"
          value={"Submit"}
        />
      </EventRegistrationFormStyled>
    </EventRegistrationFormContainer>
  );
};

export default EventRegistrationForm;

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  EventRegistrationFormBtn,
  EventRegistrationFormContainer,
  EventRegistrationFormInput,
  EventRegistrationFormLabel,
  // EventRegistrationFormLabelUi,
  EventRegistrationFormStyled,
  EventRegistrationFormTitle,
  InputErrorMessage,
} from "./EventRegistrationForm.styles";
import { EHearRadio, IFormInputs } from "../../models";
import {
  FormControl,
  FormControlLabel,
  // FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const schema = yup
  .object({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    dateOfBirth: yup
      .date()
      .required("Enter a date of birth")
      .min(new Date(1900, 0, 1))
      .max(new Date(), "You can't be born in the future!"),
    hearRadio: yup
      .string()
      .oneOf([
        EHearRadio.SOCIAL_MEDIA,
        EHearRadio.FRIENDS,
        EHearRadio.FOUND_MYSELF,
      ])
      .required("Radio is required"),
  })
  .required();

const EventRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log("hello world");
    console.log(data, "data");
  };

  return (
    <EventRegistrationFormContainer>
      <EventRegistrationFormTitle className="font-gravity">
        Event registration
      </EventRegistrationFormTitle>
      <EventRegistrationFormStyled onSubmit={handleSubmit(onSubmit)}>
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
          />
          <InputErrorMessage className="font-konnect">
            {errors.dateOfBirth?.message}
          </InputErrorMessage>
        </EventRegistrationFormLabel>

        <FormControl component="fieldset">
          <EventRegistrationFormLabel className="font-konnect">
            Where did you hear about this event?
          </EventRegistrationFormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name={"hearRadio"}
            render={({ field }) => {
              console.log(field);
              return (
                <RadioGroup {...field}>
                  <FormControlLabel
                    sx={{
                      color: "#ffffff",
                      "&.Mui-checked": {
                        color: "#64ffda",
                      },
                    }}
                    value={EHearRadio.SOCIAL_MEDIA}
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
                        {EHearRadio.SOCIAL_MEDIA.charAt(0).toUpperCase() +
                          EHearRadio.SOCIAL_MEDIA.slice(1)}
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
                    value={EHearRadio.FRIENDS}
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
                        {EHearRadio.FRIENDS.charAt(0).toUpperCase() +
                          EHearRadio.FRIENDS.slice(1)}
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
                    value={EHearRadio.FOUND_MYSELF}
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
                        {EHearRadio.FOUND_MYSELF.charAt(0).toUpperCase() +
                          EHearRadio.FOUND_MYSELF.slice(1)}
                      </span>
                    }
                  />
                </RadioGroup>
              );
            }}
          />
        </FormControl>
        <EventRegistrationFormBtn className="transition-all" type="submit" />
      </EventRegistrationFormStyled>
    </EventRegistrationFormContainer>
  );
};

export default EventRegistrationForm;

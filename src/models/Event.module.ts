export interface IEvent {
  id: number;
  title: string;
  description: string;
  event_date: string;
  organizer: string;
}

export interface IFormInputs {
  fullName: string;
  email: string;
  dateOfBirth: string;
  selectedRadio: ESelectedRadio;
}

export enum ESelectedRadio {
  SOCIAL_MEDIA = "social media",
  FRIENDS = "friends",
  FOUND_MYSELF = "found myself",
}

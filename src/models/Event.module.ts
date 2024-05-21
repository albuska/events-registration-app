export interface IEvent {
  _id: string;
  title: string;
  description: string;
  event_date: string;
  organizer: string;
}

export interface IParticipant {
  _id: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  selectedRadio: ESelectedRadio;
  event: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFormInputs {
  fullName: string;
  email: string;
  dateOfBirth: string;
  selectedRadio: ESelectedRadio;
  event?: string | undefined;
}

export enum ESelectedRadio {
  SOCIAL_MEDIA = "social media",
  FRIENDS = "friends",
  FOUND_MYSELF = "found myself",
}

export enum EParticipantsPageTab {
  LIST = "list",
  CHART = "chart",
}

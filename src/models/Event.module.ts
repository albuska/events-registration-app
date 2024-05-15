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
  dateOfBirth: Date;
  hearRadio: EHearRadio;
}

export enum EHearRadio {
  SOCIAL_MEDIA = "social media",
  FRIENDS = "friends",
  FOUND_MYSELF = "found myself",
}

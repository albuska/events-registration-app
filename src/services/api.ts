import axios from "axios";
import { IFormInputs, IParticipant } from "../models";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api`;

axios.defaults.baseURL = BASE_URL;

export const getEvents = async (sortBy = "title", sortOrder = "asc") => {
  try {
    const { data } = await axios.get("/events", {
      params: { sortBy, sortOrder },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getEventById = async (eventId: string) => {
  try {
    const { data } = await axios.get(`/events/${eventId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getParticipants = async (
  eventId: string,
  searchQuery?: string
) => {
  try {
    const params = searchQuery ? { query: searchQuery } : {};
    const { data } = await axios.get(`/participants/${eventId}`, { params });

    if (searchQuery && data.length > 0) {
      const filteredData = data.filter(
        (participant: IParticipant) =>
          participant.fullName.includes(searchQuery) ||
          participant.email.includes(searchQuery)
      );

      return filteredData;
    }

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addParticipant = async (participantData: IFormInputs) => {
  try {
    const response = await axios.post("/participants", participantData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

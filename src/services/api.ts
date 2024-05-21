import axios from "axios";
import { IFormInputs } from "../models";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api`;

axios.defaults.baseURL = BASE_URL;

export const getEvents = async () => {
  try {
    const { data } = await axios.get("/events");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getParticipants = async (eventId: string) => {
  try {
    const { data } = await axios.post(`/participants/${eventId}`);
    return data;
  } catch (error) {
    console.log(error);
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

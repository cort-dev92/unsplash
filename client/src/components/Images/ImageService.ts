import axios from "axios";

const API = "https://juan-unsplash-server.herokuapp.com";

export const getImages = async (page: number, text?: string): Promise<any> => {
  if (text) {
    return await axios.get<any[]>(`${API}/images?page=${page}&text=${text}`);
  } else {
    return await axios.get<any[]>(`${API}/images?page=${page}`);
  }
};

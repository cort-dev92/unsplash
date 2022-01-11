import { Response, RequestHandler } from "express";
import axios from "axios";

const clientId = "8BpZvwvDqwZ5LoSCjFC-H0hXkOePbazXe2KfY0EO4ec";

export const home: RequestHandler = async (req, res): Promise<Response> => {
  return res.json({ message: "Welcome here" });
};

export const getImages: RequestHandler = async (req, res): Promise<Response> => {
  const text = req.query.text;
  const page = req.query.page;

  if (text) {
    const response = await axios({
      method: "GET",
      url: `https://api.unsplash.com/search/photos?page=${page}&query=${text}&per_page=9&client_id=${clientId}`,
    });
    return res.json({ data: response.data });
  } else {
    const response = await axios({
      method: "GET",
      url: `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=${clientId}`,
    });
    return res.json({ data: response.data });
  }
};

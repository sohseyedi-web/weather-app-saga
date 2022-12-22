import axios from "axios";


export const getData = async (city) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
  );
};

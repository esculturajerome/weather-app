const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "f33a484cf794d08d0148764789aaba32";

export const fetchWeather = async (query) => {
  try {
    const api_call = await fetch(
      `${URL}${query}&units=metric&appid=${API_KEY}`
    );

    const response = await api_call.json();
    console.log(response);
    return response;
  } catch (err) {
    return err;
  }
};

import axios from 'axios';

const getDataFromAPI = async (currentDate) => {
  try {
    const currentDateISO = currentDate.toISOString();
    const weatherDataFromAPI = await axios.get(`${process.env.REACT_APP_API_PATH}/data`, { params: { currentDateISO: currentDateISO } });
    const { weatherStationData } = weatherDataFromAPI.data;
    return weatherStationData;
  }
  catch (err) {
    console.log(err);
  }
}

export const weatherStationService = {
  getDataFromAPI,
}
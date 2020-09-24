import axios from "axios";

export const stateData = async () => {
  const stateUrl = `https://api.covidtracking.com/v1/states/current.json`;
  try {
    const response = await axios.get(stateUrl);
    let stateList = response;
    return stateList
  } catch (error) {
    alert(`Err. ${error}`);
  }
};

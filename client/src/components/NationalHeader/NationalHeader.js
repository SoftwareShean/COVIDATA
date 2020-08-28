import axios from 'axios'

export const getNationalData = async () => {
  const url = "https://api.covidtracking.com/v1/us/current.json";
  try {
      const response = await axios.get(url);
      let nationalData = response.data;
      return nationalData
      console.log(nationalData[0].total)
  } catch (error) {
    alert(`Err. ${error}`);
  }
}

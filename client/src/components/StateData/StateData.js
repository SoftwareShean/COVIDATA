import axios from 'axios'

export const stateData = async () => {
  const stateUrl = `https://api.covidtracking.com/v1/states/current.json`;
  try {
    const response = await axios.get(stateUrl)
      let stateList = response.data
      console.log(stateList)
    // stateList.forEach( (obj, index) => {
    //   const option = document.createElement('option')
    //   option.value = index
    //   option.className = obj.state
    //   option.text = `${img[index].state}`
    //   select.append(option)
    // })
  } catch (error) {
    alert(`Err. ${error}`)
  }
}
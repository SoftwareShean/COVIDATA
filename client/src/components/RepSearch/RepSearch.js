import axios from 'axios'

export const getRepresentatives = async (search) => {
    let config = {
      headers: {
        "X-API-Key": process.env.REACT_APP_PROPUBLICA_API_TOKEN,
      },
    };
    const urlSen = `https://api.propublica.org/congress/v1/80-116/senate/members.json`;
    try {
        const response = await axios.get(urlSen, config)
        let senResponse = response.data.results[0].members
        let senators = [...senResponse]
        const searchLoop = (error) => {
            const bothSenators = [];
            for (let i = 0; i <= senators.length; i++) {
                if (senators[i].state === search) {
                    console.log(senators[i])
                    bothSenators.push(senators[i])
                } else if (senators[i].state === undefined) {
                    return console.log('something has gone wrong here')
                } 
            }
            console.log(typeof bothSenators)
            return bothSenators
        }
        let result = searchLoop()
        console.log('this is the result' + result)
        return result
    } catch (error) {
        alert(`Err. ${error}`)
    }
}
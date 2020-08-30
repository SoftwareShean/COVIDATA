import axios from 'axios'

export const newsDisplay = async () => {
    const newsUrl = `https://newsapi.org/v2/everything?q=covid&apiKey=f5abcb1acb1942188a4163e71207fab5`
    try {
        const response = await axios.get(newsUrl)
        let nationalNews = response.data.articles
        return nationalNews
    } catch(error) {
        alert(`Err. ${error}`)
    }
}
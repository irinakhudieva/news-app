import axios from "axios";

const BASE_URL= 'https://api.currentsapi.services/v1/latest-news'
const API_KEY= 'jo-WVTytojZuj4X7S9oiYCPN9JoEV6Vc7vbCLZwBunv6mw-o'

const apikey = process.env.REACT_APP_NEWS_API_KEY
console.log(apikey)

export const getNews = async () => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apiKey: API_KEY
            }
        })

        return response.data;
    } catch (error) {
        console.log(error)
    }
}
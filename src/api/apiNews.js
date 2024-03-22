import axios from "axios";

const BASE_URL= 'https://api.currentsapi.services/v1/latest-news'
const API_KEY= 'jo-WVTytojZuj4X7S9oiYCPN9JoEV6Vc7vbCLZwBunv6mw-o'

console.log(BASE_URL)

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
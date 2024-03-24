import axios from "axios";

const BASE_URL= process.env.REACT_APP_NEWS_BASE_API_URL
const API_KEY= process.env.REACT_APP_NEWS_API_KEY

export const getNews = async ({
    page_number = 1, 
    page_size = 10, 
    category,
    keywords
}) => {
    try {
        const response = await axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords
            }
        })

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getCategoriesNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            }
        })

        return response.data;
    } catch (error) {
        console.log(error)
    }
}
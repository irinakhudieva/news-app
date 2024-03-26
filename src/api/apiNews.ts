import axios from "axios";
import {  ParamsType, NewsApiResponse, CategoriesApiResponse } from "../interfaces";

const BASE_URL= process.env.REACT_APP_NEWS_BASE_API_URL
const API_KEY= process.env.REACT_APP_NEWS_API_KEY

export const getNews = async (params?: ParamsType): Promise<NewsApiResponse> => {
    try {
        const {
            page_number = 1, 
            page_size = 10,
            category,
            keywords
        } = params || {};
        const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
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
        return {news: [], page: 1, status: "error"}
    }
}

export const getLatestNews = async (): Promise<NewsApiResponse> => {
    try {
        const response = await axios.get<NewsApiResponse>(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,
            }
        })

        return response.data;
    } catch (error) {
        console.log(error)
        return {news: [], page: 1, status: "error"}
    }
}

export const getCategoriesNews = async (): Promise<CategoriesApiResponse> => {
    try {
        const response = await axios.get<CategoriesApiResponse>(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            }
        })

        return response.data;
    } catch (error) {
        console.log(error)
        return {categories: [], description: '', status: "error"}
    }
}
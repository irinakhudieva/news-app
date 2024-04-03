import { CategoriesType } from "../../category";



export interface INews {
    author: string;
    category: CategoriesType[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title?: string | number | null;
    url: string | null | undefined
}

export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: string;
}

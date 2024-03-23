import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'
import Pagination from '../../components/Pagination/Pagination'

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    const pageSize = 10
console.log(currentPage)
    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const { news } = await getNews(currentPage, pageSize) 
            setNews(news)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage])

    const handleNextPage = () => {
        if(currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePeviousPage = () => {
        if(currentPage > totalPages) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleClickPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton type='banner' count={1} />
            )}       

            <Pagination 
                totalPages={totalPages} 
                currentPage={currentPage}
                handleNextPage={handleNextPage} 
                handlePeviousPage={handlePeviousPage} 
                handleClickPage={handleClickPage}
            />

            {!isLoading ? (
                <NewsList news={news} /> 
            )  : (
                <Skeleton type='item' count={10} />
            )}  

            <Pagination 
                totalPages={totalPages} 
                currentPage={currentPage}
                handleNextPage={handleNextPage} 
                handlePeviousPage={handlePeviousPage} 
                handleClickPage={handleClickPage}
            /> 
        </main>
    )
}

export default Main

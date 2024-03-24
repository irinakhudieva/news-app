import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { getCategoriesNews, getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'
import Pagination from '../../components/Pagination/Pagination'
import Categories from '../../components/Categories/Categories'

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    const totalPages = 10
    const pageSize = 10

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const { news } = await getNews({
                page_number: currentPage, 
                page_size: pageSize,
                category: selectedCategory === 'All' ? null : selectedCategory
            }) 
            setNews(news)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCategoriesNews = async () => {
        try {
            const { categories } = await getCategoriesNews() 
            setCategories(["All", ...categories])
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategoriesNews()
    }, [])

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage, selectedCategory])

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
            <Categories 
                categories={categories} 
                selectedCategories={selectedCategory} 
                setSelectedCategories={setSelectedCategory}
            />
            
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

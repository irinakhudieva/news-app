import React from 'react'
import styles from './Main.module.css'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { getCategoriesNews, getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import Pagination from '../../components/Pagination/Pagination'
import Categories from '../../components/Categories/Categories'
import Search from '../../components/Search/Search'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'

const Main = () => {
    const {filters, changeFilter} = useFilters({
        page_number: 1, 
        page_size: PAGE_SIZE,
        category: null,
        keywords: '' 
    })

    const debounceKeywords = useDebounce(filters.keywords, 1500)

    const {data, isLoading} = useFetch(getNews, {
        ...filters,
        keywords: debounceKeywords 
    })

    const {data: dataCategories} = useFetch(getCategoriesNews)

    const handleNextPage = () => {
        if(filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1)
        }
    }

    const handlePeviousPage = () => {
        if(filters.page_number > TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number - 1)
        }
    }

    const handleClickPage = (pageNumber) => {
        changeFilter('page_number', pageNumber)
    }

    return (
        <main className={styles.main}>
            {dataCategories && (
               <Categories 
                    categories={dataCategories.categories} 
                    selectedCategories={filters.category} 
                    setSelectedCategories={(category) => changeFilter('category', category)}
                /> 
            )}
            
            <Search 
                keywordws={filters.keywords} 
                setKeywords={(keywords) => changeFilter('keywords', keywords)} />
            
            <NewsBanner 
                isLoading={isLoading} 
                item={data && data.news && data.news[0]} 
            />

            <Pagination 
                totalPages={TOTAL_PAGES} 
                currentPage={filters.page_number}
                handleNextPage={handleNextPage} 
                handlePeviousPage={handlePeviousPage} 
                handleClickPage={handleClickPage}
            />

            <NewsList isLoading={isLoading} news={data?.news} /> 

            <Pagination 
                totalPages={TOTAL_PAGES} 
                currentPage={filters.page_number}
                handleNextPage={handleNextPage} 
                handlePeviousPage={handlePeviousPage} 
                handleClickPage={handleClickPage}
            /> 
        </main>
    )
}

export default Main

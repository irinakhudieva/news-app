import React from 'react'
import styles from './NewsByFilters.module.css'
import Pagination from '../Pagination/Pagination'
import NewsList from '../NewsList/NewsList'
import { TOTAL_PAGES } from '../../constants/constants'
import NewsFilters from '../NewsFilters/NewsFilters'

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {

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
        <section className={styles.section}>
            <NewsFilters filters={filters} changeFilter={changeFilter}/>

            <Pagination 
                totalPages={TOTAL_PAGES} 
                currentPage={filters.page_number}
                handleNextPage={handleNextPage} 
                handlePeviousPage={handlePeviousPage} 
                handleClickPage={handleClickPage}
            />

            <NewsList isLoading={isLoading} news={news} /> 

            <Pagination 
                totalPages={TOTAL_PAGES} 
                currentPage={filters.page_number}
                handleNextPage={handleNextPage} 
                handlePeviousPage={handlePeviousPage} 
                handleClickPage={handleClickPage}
            /> 
        </section>
    )
}

export default NewsByFilters

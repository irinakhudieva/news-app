import styles from './NewsByFilters.module.css'
import NewsList from '../NewsList/NewsList'
import { TOTAL_PAGES } from '../../constants/constants'
import NewsFilters from '../NewsFilters/NewsFilters'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper'
import { useGetNewsQuery } from '../../store/services/newsApi'
import { useAppDispatch, useAppSelector } from '../../store'
import { setFilters } from '../../store/slices/newsSlice'


const NewsByFilters = () => {
    const dispatch = useAppDispatch()

    const filters = useAppSelector(state => state.news.filters)

    const news = useAppSelector(state => state.news.news)

    const debounceKeywords = useDebounce(filters.keywords, 1500)

    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debounceKeywords 
    })

    const handleNextPage = () => {
        if(filters.page_number < TOTAL_PAGES) {
            dispatch(setFilters({key: 'page_number', value: filters.page_number + 1}))
        }
    }

    const handlePeviousPage = () => {
        if(filters.page_number > TOTAL_PAGES) {
            dispatch(setFilters({key: 'page_number', value: filters.page_number - 1}))
        }
    }

    const handleClickPage = (pageNumber: number) => {
        dispatch(setFilters({key: 'page_number', value: pageNumber}))
    }

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} />

            <PaginationWrapper 
                top
                bottom
                totalPages={TOTAL_PAGES} 
                currentPage={filters.page_number}
                handleNextPage={handleNextPage} 
                handlePeviousPage={handlePeviousPage} 
                handleClickPage={handleClickPage}
            >
                <NewsList isLoading={isLoading} news={news} />
            </PaginationWrapper>
        </section>
    )
}

export default NewsByFilters

import { useAppDispatch, useAppSelector } from '../../../../app/appStrore'
import { useGetNewsQuery } from '../../../../entities/news/api/newsApi'
import { setFilters } from '../../../../entities/news/model/newsSlice'
import { Pagination } from '../../../../features/pagination'
import { TOTAL_PAGES } from '../../../../shared/constants/constants'
import { useDebounce } from '../../../../shared/hooks/useDebounce'
import { NewsList } from '../../../../widgets/news/ui'
import NewsFilters from '../NewsFilters/NewsFilters'
import styles from './NewsByFilters.module.css'


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

            <Pagination
                top
                bottom
                totalPages={TOTAL_PAGES} 
                currentPage={filters.page_number}
                handleNextPage={handleNextPage} 
                handlePeviousPage={handlePeviousPage} 
                handleClickPage={handleClickPage}
            >
                <NewsList isLoading={isLoading} news={news} />
            </Pagination>
        </section>
    )
}

export default NewsByFilters

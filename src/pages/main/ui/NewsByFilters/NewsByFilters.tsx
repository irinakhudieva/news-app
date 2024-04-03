import { useAppSelector } from '../../../../app/appStrore'
import { useGetCategoriesQuery, useGetNewsQuery } from '../../../../entities/news/api/newsApi'
import { useDebounce } from '../../../../shared/hooks/useDebounce'
import { NewsFilters } from '../../../../widgets/news'
import NewsListWithPagination from '../NewsListWithPagination/NewsListWithPagination'
import styles from './NewsByFilters.module.css'


const NewsByFilters = () => {

    const filters = useAppSelector(state => state.news.filters)

    const news = useAppSelector(state => state.news.news)

    const debounceKeywords = useDebounce(filters.keywords, 1500)

    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debounceKeywords 
    })

    const { data } = useGetCategoriesQuery(null);

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} categories={data?.categories || []} />
            <NewsListWithPagination news={news} filters={filters} isLoading={isLoading} />
        </section>
    )
}

export default NewsByFilters

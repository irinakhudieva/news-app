import { INews } from '../../../../entities/news'
import { Pagination } from '../../../../features/pagination'
import { TOTAL_PAGES } from '../../../../shared/constants/constants'
import { IFilters } from '../../../../shared/interfaces'
import { NewsList } from '../../../../widgets/news'
import { usePaginationNews } from '../../utils/hooks/usePaginationNews'

interface Props {
    filters: IFilters;
    news: INews[];
    isLoading: boolean;
  }

const NewsListWithPagination = ({filters, news, isLoading}: Props) => {
    
    const { handleClickPage, handleNextPage, handlePeviousPage } = usePaginationNews(filters);

    return (
        <Pagination
            top
            bottom
            totalPages={TOTAL_PAGES} 
            currentPage={filters.page_number}
            handleNextPage={handleNextPage} 
            handlePeviousPage={handlePeviousPage} 
            handleClickPage={handleClickPage}
        >
            <NewsList 
                direction='column' 
                type='item' 
                isLoading={isLoading} 
                news={news} 
            />
        </Pagination>
    )
}

export default NewsListWithPagination

import { useAppDispatch } from '../../../../app/appStrore';
import { useGetCategoriesQuery } from '../../../../entities/news/api/newsApi';
import { setFilters } from '../../../../entities/news/model/newsSlice';
import { Categories } from '../../../../features/category';
import { Search } from '../../../../features/search';
import { Slider } from '../../../../features/slider';
import { IFilters } from '../../../../shared/interfaces';
import styles from './NewsFilters.module.css'


interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { data } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch()

  return (
    <div className={styles.filters}>
        <Slider>
          <>
          {data && (
               <Categories 
                    categories={data.categories} 
                    selectedCategories={filters.category} 
                    setSelectedCategories={(category) =>  
                      dispatch(setFilters({key: 'category', value: category}))}
                /> 
          )}
          </>
              
        </Slider>
         
        <Search 
            keywords={filters.keywords} 
            setKeywords={(keywords) => 
              dispatch(setFilters({key: 'keywords', value: keywords}))} 
        />
    </div>
  )
}

export default NewsFilters

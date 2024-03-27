import styles from './NewsFilters.module.css'
import Categories from '../Categories/Categories'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'
import { IFilters } from '../../interfaces'
import { useGetCategoriesQuery } from '../../store/services/newsApi'
import { useAppDispatch } from '../../store'
import { setFilters } from '../../store/slices/newsSlice'

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

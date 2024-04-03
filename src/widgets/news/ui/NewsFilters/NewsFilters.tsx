import { useAppDispatch } from '../../../../app/appStrore';
import { CategoriesType } from '../../../../entities/category';
import { setFilters } from '../../../../entities/news/model/newsSlice';
import { Categories } from '../../../../features/category';
import { Search } from '../../../../features/search';
import { Slider } from '../../../../features/slider';
import { IFilters } from '../../../../shared/interfaces';
import styles from './NewsFilters.module.css'


interface Props {
  filters: IFilters;
  categories: CategoriesType[]
}

const NewsFilters = ({ filters, categories }: Props) => {
 

  const dispatch = useAppDispatch()

  return (
    <div className={styles.filters}>
        <Slider>
          <>
          {categories && (
               <Categories 
                    categories={categories} 
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

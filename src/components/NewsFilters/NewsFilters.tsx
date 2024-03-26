import React from 'react'
import styles from './NewsFilters.module.css'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getCategoriesNews } from '../../api/apiNews'
import Categories from '../Categories/Categories'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'
import { CategoriesApiResponse, IFilters } from '../../interfaces'

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void
}

const NewsFilters = ({filters, changeFilter}: Props) => {

  const {data: dataCategories} = useFetch<CategoriesApiResponse, null>(getCategoriesNews)

  return (
    <div className={styles.filters}>
        <Slider>
          <>
          {dataCategories && (
               <Categories 
                    categories={dataCategories.categories} 
                    selectedCategories={filters.category} 
                    setSelectedCategories={(category) => changeFilter('category', category)}
                /> 
          )}
          </>
              
        </Slider>
         
        <Search 
            keywords={filters.keywords} 
            setKeywords={(keywords) => changeFilter('keywords', keywords)} 
        />
    </div>
  )
}

export default NewsFilters

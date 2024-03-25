import React from 'react'
import styles from './NewsFilters.module.css'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getCategoriesNews } from '../../api/apiNews'
import Categories from '../Categories/Categories'
import Search from '../Search/Search'


const NewsFilters = ({filters, changeFilter}) => {

  const {data: dataCategories} = useFetch(getCategoriesNews)

  return (
    <div className={styles.filters}>
         {dataCategories && (
               <Categories 
                    categories={dataCategories.categories} 
                    selectedCategories={filters.category} 
                    setSelectedCategories={(category) => changeFilter('category', category)}
                /> 
            )}
            
            <Search 
                keywordws={filters.keywords} 
                setKeywords={(keywords) => changeFilter('keywords', keywords)} 
            />
  
    </div>
  )
}

export default NewsFilters

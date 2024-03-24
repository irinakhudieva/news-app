import React from 'react'
import styles from './Search.module.css'

const Search = ({keywordws, setKeywords}) => {
  return (
    <div className={styles.search}>
       <input 
        type='text' 
        placeholder='Search'
        value={keywordws} 
        onChange={(e) => setKeywords(e.target.value)} 
        className={styles.input} 
      />
    </div>
  )
}

export default Search

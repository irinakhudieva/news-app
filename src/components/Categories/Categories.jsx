import React from 'react'
import styles from './Categories.module.css'

const Categories = ({categories, selectedCategories, setSelectedCategories}) => {
  return (
    <div className={styles.categories}>
      {categories.map(category => (
        <button 
            key={category} 
            className={selectedCategories === category ? styles.active : styles.item} 
            onClick={() => setSelectedCategories(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories

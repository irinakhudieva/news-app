import React from 'react'
import styles from './NewsList.module.css'
import NewsItem from '../NewsItem/NewsItem'


const NewsList = ({news}) => {
  return (
    <ul className={styles.list}>
      {news.map(item => (
        <NewsItem item={item} />
      ))}
    </ul>
  )
}

export default NewsList

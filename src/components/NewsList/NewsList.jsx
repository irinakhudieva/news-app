import React from 'react'
import styles from './NewsList.module.css'
import NewsItem from '../NewsItem/NewsItem'
import withSkeleton from '../../helpers/hoc/withSkeleton'


const NewsList = ({news}) => {
  return (
    <ul className={styles.list}>
      {news.map(item => (
        <NewsItem item={item} key={item.id} />
      ))}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10, 'column')

export default NewsListWithSkeleton

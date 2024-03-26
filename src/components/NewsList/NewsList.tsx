import React from 'react'
import styles from './NewsList.module.css'
import NewsItem from '../NewsItem/NewsItem'
import withSkeleton from '../../helpers/hoc/withSkeleton'
import { INews } from '../../interfaces'

interface Props {
  news?: INews[]
}

const NewsList = ({news}: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map(item => (
        <NewsItem item={item} key={item.id} />
      ))}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10, 'column')

export default NewsListWithSkeleton
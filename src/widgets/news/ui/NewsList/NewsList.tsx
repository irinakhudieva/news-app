import { INews, NewsItem } from '../../../../entities/news'
import withSkeleton from '../../../../shared/hoc/withSkeleton'
import styles from './NewsList.module.css'

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

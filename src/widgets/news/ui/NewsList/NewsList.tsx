import { INews } from '../../../../entities/news'
import NewsCard from '../../../../entities/news/ui/NewsCard/NewsCard'
import withSkeleton from '../../../../shared/hoc/withSkeleton'
import styles from './NewsList.module.css'

interface Props {
  news?: INews[];
  type: 'banner' | 'item';
  direction: 'row' | 'column';
}

const NewsList = ({news, type}: Props) => {
  return (
    <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
      {news?.map(item => (
        <NewsCard item={item} key={item.id} type={type} />
      ))}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10)

export default NewsListWithSkeleton

import { useAppDispatch } from '../../../../app/appStrore'
import { INews } from '../../../../entities/news'
import { useGetLatestNewsQuery } from '../../../../entities/news/api/newsApi'
import { setCurrentNews } from '../../../../entities/news/model/newsSlice'
import { NewsList } from '../../../../widgets/news'
import styles from './LatestNews.module.css'
import { useNavigate } from 'react-router-dom'

const LatestNews = () => {
    const {data, isLoading} = useGetLatestNewsQuery(null)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const navigateTo = (news: INews) => {
      dispatch(setCurrentNews(news))
      navigate(`/news/${news.id}`)
    }

    return (
      <section className={styles.section}>
          <NewsList 
            direction='row' 
            type='banner' 
            news={data && data.news} 
            isLoading={isLoading} 
            viewNewsSlot={(news: INews) => 
              <p onClick={() => navigateTo(news)} className={styles.readMore}>view more...</p>}
          />
      </section>
    )
}

export default LatestNews

import { useAppSelector } from '../../../app/appStrore'
import { NewsDetails } from '../../../entities/news'
import styles from './NewsPage.module.css'
import { Link } from 'react-router-dom'

const NewsPage = () => {
    const currentNews = useAppSelector(state => state.news.currentNews)

    if(!currentNews) {
        return (
            <div>
                <h1>Cannot find news</h1>
                <Link to={'/'}><h3>Go to main page</h3></Link>
            </div>
        )
    }

    return (
        <main className={styles.news}>
            <NewsDetails item={currentNews} />
        </main>
    )
}

export default NewsPage

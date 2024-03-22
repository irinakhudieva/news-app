import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import { getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'

const Main = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const { news } = await getNews() 
                setNews(news)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews()
    }, [])


    return (
        <main className={styles.main}>
            {news.length > 0 && (
                <NewsBanner item={news[0]} />
            ) }         
            <NewsList news={news} />     
        </main>
    )
}

export default Main

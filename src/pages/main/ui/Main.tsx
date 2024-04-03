import styles from './Main.module.css'
import NewsByFilters from './NewsByFilters/NewsByFilters'
import LatestNews from './LatestNews/LatestNews'

const Main = () => {
   
    return (
        <main className={styles.main}>
            <LatestNews />
            <NewsByFilters/>
        </main>
    )
}

export default Main

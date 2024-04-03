import { formatDate } from '../../../../shared/helpers/formatDate'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
        <Link to={'/'}><h1 className={styles.title}>NEWS REACT</h1></Link>
        <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  )
}

export default Header

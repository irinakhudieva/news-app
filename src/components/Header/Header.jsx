import React from 'react'
import styles from './Header.module.css'
import { formatDate } from '../../utils/formatDate'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>NEWS REACT</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  )
}

export default Header

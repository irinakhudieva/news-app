import { IPaginationProps } from '../../model/types'
import styles from './PaginationButton.module.css'


const PaginationButton = ({
  totalPages, 
  currentPage, 
  handleClickPage, 
  handleNextPage, 
  handlePeviousPage
}: IPaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button disabled={currentPage <= 1} onClick={handlePeviousPage} className={styles.arrow}>{'<'}</button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button   
              onClick={() => handleClickPage(index + 1)} 
              key={index} 
              disabled={index + 1 === currentPage}
              className={styles.pageNumber}>{index + 1}
          </button>
        ))}
      </div>
      <button disabled={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>{'>'}</button>
    </div>
  )
}

export default PaginationButton

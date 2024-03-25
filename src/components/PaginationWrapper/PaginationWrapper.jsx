import React from 'react'
import styles from './PaginationWrapper.module.css'
import Pagination from '../Pagination/Pagination'


const PaginationWrapper = ({top, bottom, children, ...pagitationProps}) => {
  return (
    <>
      {top && <Pagination {...pagitationProps} />}
      {children}
      {bottom && <Pagination {...pagitationProps} />}
    </>
  )
}

export default PaginationWrapper

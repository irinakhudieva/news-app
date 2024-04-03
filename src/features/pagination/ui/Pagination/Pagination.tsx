import React from 'react'
import PaginationButton from '../PaginationButton/PaginationButton'
import { IPaginationProps } from '../../model/types';


interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}


const Pagination = ({
  top, 
  bottom, 
  children, 
  ...pagitationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButton {...pagitationProps} />}
      {children}
      {bottom && <PaginationButton {...pagitationProps} />}
    </>
  )
}

export default Pagination

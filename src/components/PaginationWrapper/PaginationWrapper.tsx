import React from 'react'
import Pagination from '../Pagination/Pagination'
import { IPaginationProps } from '../../interfaces';

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}


const PaginationWrapper = ({
  top, 
  bottom, 
  children, 
  ...pagitationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <Pagination {...pagitationProps} />}
      {children}
      {bottom && <Pagination {...pagitationProps} />}
    </>
  )
}

export default PaginationWrapper

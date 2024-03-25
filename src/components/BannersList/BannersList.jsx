import React from 'react'
import styles from './BannersList.module.css'
import withSkeleton from '../../helpers/hoc/withSkeleton'
import NewsBanner from '../NewsBanner/NewsBanner'

const BannersList = ({banners}) => {
  return (
    <ul className={styles.banners}>
      {banners?.map(banner => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')

export default BannersListWithSkeleton

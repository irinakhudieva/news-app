import { INews, NewsBanner } from '../../../../entities/news';
import withSkeleton from '../../../../shared/hoc/withSkeleton';
import styles from './BannersList.module.css'

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({banners}: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map(banner => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row')

export default BannersListWithSkeleton

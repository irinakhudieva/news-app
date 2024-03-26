import styles from './Image.module.css'


interface Props {
  image: string;
}


const Image = ({image}: Props) => {
  return (
    <div className={styles.wrapper}>
       {image && (
          <img src={image} alt='news' className={styles.image} />
       )} 
    </div>
  )
}

export default Image

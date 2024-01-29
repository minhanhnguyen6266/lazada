import { Carousel, Image } from 'antd'
import styles from './content.module.css'
import { categories, images } from './data'
const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.categories}>
        {categories.map((category) => {
          return <p className={styles.category}>{category}</p>
        })}
      </div>
      <div className={styles.slide}>
        <Carousel autoplay>
          {images.map((image) => {
            return <img src={image} className={styles.image} />
          })}
        </Carousel>
      </div>
    </div>
  )
}
export default Content

import Categories from './Categories/Categories'
import FlashSale from './FlashSale/FlashSale'
import JustForYou from './JustForYou/JustForYou'
import LazMall from './LazMall/LazMall'
import styles from './product.module.css'
import {
  flashSaleData,
  lazMallData,
  categoriesData,
  justForYouData,
} from './data'

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.type}>
        <h4>Flash Sale</h4>
        <FlashSale flashSaleData={flashSaleData} />
      </div>

      <div className={styles.type}>
        <div className={styles.shopMore}>
          <h4>LazMall</h4>
          <h5 className={styles.more}>Shop more &rarr;</h5>
        </div>
        <LazMall lazMallData={lazMallData} />
      </div>

      <div className={styles.type}>
        <h4>Categories</h4>
        <Categories categoriesData={categoriesData} />
      </div>

      <div className={styles.type}>
        <h4>Just For You</h4>
        <JustForYou justForYouData={justForYouData} />
      </div>
    </div>
  )
}
export default Product

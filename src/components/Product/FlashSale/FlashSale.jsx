import styles from './flashSale.module.css'

const FlashSale = ({ flashSaleData }) => {
  return (
    <div className={styles.flashSale}>
      {/* Time */}
      <div className={styles.time}>
        <div className={styles.onSale}>On Sale Now</div>
        <div className={styles.timeCount}>
          <div>Ending in</div>
          <div>24</div>
          <div>:</div>
          <div>12</div>
          <div>:</div>
          <div>01</div>
        </div>
        <div className={styles.showSale}>
          <button>Shop All Products</button>
        </div>
      </div>

      {/* Product */}
      <div className={styles.productSale}>
        {flashSaleData.map((product) => {
          return (
            <div hoverable className={styles.card}>
              <img
                src={product.image}
                alt="product"
                className={styles.imageProduct}
              />
              <p className={styles.titleSale}>
                {product.title.substring(0, 40)} ...
              </p>
              <p className={styles.newPrice}>
                đ{product.newPrice.toLocaleString('en-US')}
              </p>
              <div className={styles.decrease}>
                <p className={styles.oldPrice}>
                  đ{product.oldPrice.toLocaleString('en-US')}
                </p>
                <p>-{product.percentDecrease}%</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default FlashSale

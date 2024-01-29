import styles from './lazMall.module.css'
const LazMall = ({ lazMallData }) => {
  return (
    <div className={styles.lazMall}>
      {lazMallData.map((product) => {
        return (
          <>
            <div className={styles.brand}>
              <img
                src={product.bigImage}
                alt="bigImage"
                className={styles.bigImage}
              />
              <img
                src={product.smallImage}
                alt="smallImage"
                className={styles.smallImage}
              />
              <div className={styles.info}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.from}>{product.from}</p>
              </div>
            </div>
            {/* <div></div> */}
          </>
        )
      })}
    </div>
  )
}
export default LazMall

import { vouchers } from './data'
import styles from './voucher.module.css'
import saleImage from '../../img/logoImage.gif'

const Voucher = () => {
  return (
    <>
      <div className={styles.vouchers}>
        {vouchers.map((voucher) => {
          return (
            <div className={styles.voucher}>
              <img
                src={voucher.image}
                alt="logo"
                className={styles.logoImage}
              />
              <p className={styles.text}>{voucher.text}</p>
            </div>
          )
        })}
      </div>
      <div className={styles.sale}>
        <img src={saleImage} alt="" className={styles.logoSaleImage} />
      </div>
    </>
  )
}
export default Voucher

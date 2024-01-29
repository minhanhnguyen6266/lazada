import styles from './contact.module.css'

const Contact = ({ lazadaBankData, contactUs, lazadaVietNam }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactCard}>
        {lazadaBankData.map((imgBank) => {
          return (
            <div className={styles.boxBank}>
              <img src={imgBank} alt="imgBank" className={styles.imgBank} />
            </div>
          )
        })}
      </div>
      <div className={styles.contactText}>
        <div>
          <h4>Contact us</h4>
          <div className={styles.content}>
            {contactUs.map((ctu) => {
              return (
                <div>
                  <p>{ctu}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <h4>Lazada VietNam</h4>
          <div className={styles.content}>
            {lazadaVietNam.map((lzd) => {
              return (
                <div>
                  <p>{lzd}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  )
}
export default Contact

import styles from './navbar.module.css'
import { data } from './data'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {data.map((data) => {
        return (
          <a className={styles.navbarText} href="https://www.facebook.com/">
            {data}
          </a>
        )
      })}
    </div>
  )
}
export default Navbar

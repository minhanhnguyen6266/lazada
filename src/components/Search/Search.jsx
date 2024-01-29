import styles from './search.module.css'

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.items}>
        <img
          src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png"
          alt="logo"
          className={styles.logo}
        />
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search in Lazada"
            className={styles.inputSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={styles.searchIcon}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              className={styles.iconSmall}
            />
          </svg>
        </div>
        <div className={styles.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />{' '}
          </svg>
        </div>
        <div className={styles.bank}>
          <img
            src="https://lzd-img-global.slatic.net/us/domino/0d86ec64798b48da4620f6d785daccd5.png"
            alt="logo-vcb"
            className={styles.logoBank}
          />
        </div>
      </div>
    </div>
  )
}
export default Search

import styles from './categories.module.css'

const Categories = ({ categoriesData }) => {
  return (
    <div className={styles.categories}>
      {categoriesData.map((cate) => {
        return (
          <div className={styles.category}>
            <img
              src={cate.cateImage}
              alt="category"
              className={styles.cateImage}
            />
            <p className={styles.cateName}>{cate.cateName}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Categories

import { reviews } from "../../assets/reviews"
import styles from "./reviews.module.css"

const Reviews = () => {

    const reviewsItems = (
        reviews.map((review, index) => {
                  return (
                    <div
                      className={`${styles.box} ${review.woman ? styles.red : styles.blue}`}
                      key={index}
                    >
                      <h2 className={styles.name}>{review.name}</h2>
                      <p className={styles.text}>{review.text}</p>
                    </div>
                  );
                }))

  return (
    <section className={styles.reviews}>
        <div className={styles.wrapper}>
          <div className={styles.sliderWrapper}>
            {reviewsItems}
          </div>
          <div className={styles.sliderWrapper}>
            {reviewsItems}
          </div>
        </div>
        <a className={styles.link} target="_blank" href="https://www.facebook.com/photoartmk/reviews">Klikněte pro více recenzí.</a>
    </section>
  )
}

export default Reviews
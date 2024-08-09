import { reviews } from "../../../public/editable/reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./reviews.module.css";
import Slider from "react-slick";
export const Reviews = () => {
  const reviewsItems = reviews.map((review, index) => {
    return (
      <a
        key={index + review.name}
        target="_blank"
        draggable="false"
        href="https://www.facebook.com/photoartmk/reviews"
      >
        <div
          className={`${styles.box} ${review.woman ? styles.red : styles.blue}`}
        >
          <h2 className={styles.name}>{review.name}</h2>
          <p className={styles.text}>{review.text}</p>
        </div>
      </a>
    );
  });

  return (
    <Slider
      arrows={false}
      infinite
      dots
      // dotsClass={styles.dots}
      autoplay
      autoplaySpeed={5000}
      speed={2000}
      slidesToShow={5}
      slidesToScroll={3}
      className={styles.slider}
      responsive={[
        {
          breakpoint: 1280, // Large desktops and below
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1024, // Small desktops and below
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768, // Tablets and below
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480, // Mobile devices
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]}
    >
      {reviewsItems}
    </Slider>
  );
};

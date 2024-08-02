import { reviews } from "../../assets/reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./reviews.module.css";
import Slider from "react-slick";
const getSlidesToShow = () => {
  const width = window.innerWidth;

  if (width < 480) {
    return 1; // Mobile devices
  } else if (width >= 480 && width < 768) {
    return 2; // Small tablets
  } else if (width >= 768 && width < 1024) {
    return 3; // Tablets
  } else if (width >= 1024 && width < 1280) {
    return 4; // Small desktops
  } else {
    return 5; // Large desktops
  }
};
const Reviews = () => {
  const reviewsItems = reviews.map((review, index) => {
    return (
      <div
        className={`${styles.box} ${review.woman ? styles.red : styles.blue}`}
        key={index}
      >
        <h2 className={styles.name}>{review.name}</h2>
        <p className={styles.text}>{review.text}</p>
      </div>
    );
  });

  return (
    <Slider
      arrows={false}
      infinite
      dots
      autoplay
      autoplaySpeed={2000}
      speed={1000}
      adaptiveHeight
      slidesToShow={5}
      slidesToScroll={5}
      className={styles.slider}
      responsive={[
        {
          breakpoint: 1280, // Large desktops and below
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
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

export default Reviews;

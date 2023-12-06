import styles from "./portfolio.module.css";
import { Link } from "react-router-dom";
import galleryItems from "./GalleryPaths";

const Portfolio = () => {
  const galleries = galleryItems.map((gallery) => {
    return (
      <Link className={styles.gallery} to={`/${gallery.url}`} key={gallery.url}>
        <div className={styles.galleryText}>{gallery.text}</div>
        <img
          className={styles.galleryImg}
          src={
            gallery.preview[Math.floor(Math.random() * gallery.preview.length)]
          }
          alt="Snímek z galerie"
        />
      </Link>
    );
  });

  return (
    <section className={styles.main}>
      <h3 className={styles.heading}>Podívejte se na příklad mé tvorby.</h3>
      <div className={styles.galleries}>{galleries}</div>
    </section>
  );
};

export default Portfolio;

import styles from "./portfolio.module.css";
import { Link } from "react-router-dom";
import galleryItems from "./GalleryPaths";

const Portfolio = () => {
  const galleries = galleryItems.map((gallery) => {
    return (
      <Link
        className={styles.gallery}
        to={`/portfolio/${gallery.id}`}
        key={gallery.id}
      >
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
      <article className={styles.heading}>
        <h3>Podívejte se na mou tvorbu.</h3>
        <p>Vyberte si galerii.</p>
      </article>
      <div className={styles.galleries}>{galleries}</div>
    </section>
  );
};

export default Portfolio;

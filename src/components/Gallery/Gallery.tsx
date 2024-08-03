import styles from "./gallery.module.css";
import { useParams, Link } from "react-router-dom";
// import { galleries, GalleryType } from "./galleryPaths";
import { chevronLeft } from "../../assets/icons";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { galleries, GalleryType } from "./galleryPaths";

export const Gallery = () => {
  const { id } = useParams();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const currentGallery: GalleryType = galleries.find(
    (gallery) => gallery.url === id
  )!;

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <section className={styles.gallery}>
      <Link className={styles.backBtn} relative="path" to="..">
        {chevronLeft} Zpět
      </Link>
      <h1 className={styles.heading}>{currentGallery?.text}</h1>
      <div className={styles.imgContainer}>
        {currentGallery?.gallery.map((item, index) => (
          <img
            onClick={() => openLightboxOnSlide(index + 1)}
            className={styles.galleryImg}
            key={index}
            src={item}
            loading="lazy"
            alt=""
            onError={(e) => {
              e.currentTarget.src = "../images/default-fallback-image.png";
            }}
          />
        ))}
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={currentGallery.gallery}
        onClose={() => document.fullscreenElement && document.exitFullscreen()}
      />
    </section>
  );
};

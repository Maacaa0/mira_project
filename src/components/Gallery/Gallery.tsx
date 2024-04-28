import styles from "./gallery.module.css";
import { useParams, Link } from "react-router-dom";
import { galleries, GalleryType } from "./GalleryPaths";
import { chevronLeft } from "../../assets/icons";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Gallery = () => {
  const { id } = useParams();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const currentGallery: GalleryType = galleries.find(
    (gallery) => gallery.id === parseInt(id!)
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
      <h1 className={styles.heading}>Galerie {currentGallery?.text}</h1>
      {/* <p>{currentGallery.id}</p> */}
      <div className={styles.imgContainer}>
        {currentGallery?.gallery.map((item, index) => (
          <img
            onClick={() => openLightboxOnSlide(index + 1)}
            className={styles.galleryImg}
            key={index}
            src={item}
            loading="lazy"
            alt=""
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

export default Gallery;

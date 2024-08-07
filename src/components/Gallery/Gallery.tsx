import styles from "./gallery.module.css";
import commonStyles from "../../common.module.css";
import { useParams, Link } from "react-router-dom";
import { chevronLeft } from "../../assets/icons";
import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import { galleries, GalleryType } from "./galleryPaths";
import { shuffleArr } from "../../utils";

export const Gallery = () => {
  const { id } = useParams();
  const [shuffledGallery, setShuffledGallery] = useState<string[]>([]);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const currentGallery: GalleryType = galleries.find(
    (gallery) => gallery.url === id
  )!;

  useEffect(() => {
    setShuffledGallery(shuffleArr([...currentGallery.gallery]));
  }, [currentGallery]);

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <Link className={styles.backBtn} relative="path" to="..">
        {chevronLeft} Zpět
      </Link>
      <section className={commonStyles.pageWrapper}>
        <h1 className={styles.heading}>{currentGallery?.text}</h1>
        <div className={styles.imgContainer}>
          {shuffledGallery.map((item, index) => (
            <img
              onClick={() =>
                openLightboxOnSlide(shuffledGallery.indexOf(item) + 1)
              }
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
          sources={shuffledGallery}
          onClose={() =>
            document.fullscreenElement && document.exitFullscreen()
          }
          captions={[
            <>
              <h2>The first image's title.</h2>
              <h3>The first image's description.</h3>
            </>,
            "The second caption"
          ]}
        />
      </section>
    </>
  );
};

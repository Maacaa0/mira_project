import { useState, useEffect } from "react";
import styles from "./gallery.module.css";
import { useParams, Link } from "react-router-dom";
import galleryItems from "./GalleryPaths";
import { chevronLeft } from "../../assets/icons";

type GalleryType = {
  id: number;
  preview: string[];
  url: string;
  text: string;
  gallery: string[];
};

const Gallery = () => {
  const params = useParams<{ id?: string }>();

  const [currentGallery, setCurrentGallery] = useState<GalleryType | null>(
    null
  );

  useEffect(() => {
    // Check if params.id is a valid index before updating the state
    const index = +params.id! - 1 || 0;
    if (!isNaN(index) && index >= 0 && index <= galleryItems.length) {
      setCurrentGallery(galleryItems[index]);
    } else {
      setCurrentGallery(null); // Set an empty array if the index is invalid
    }
  }, [params.id]);

  console.log(currentGallery);
  return (
    <section className={styles.gallery}>
      <Link className={styles.backBtn} 
            relative="path" 
            to="..">

        {chevronLeft} Zpět
        
      </Link>
      <h3 className={styles.heading}>Galerie {currentGallery?.text}</h3>
      <div>
        {currentGallery?.gallery.map((imgPath, index) => (
          <img className={styles.galleryImg} key={index} src={imgPath} alt="" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

import styles from "./portfolio.module.css";
import { useNavigate } from "react-router-dom";
import { galleries } from "../../components/Gallery/galleryPaths";
import { useState } from "react";
import { ConfirmDialog } from "../../components";
import React from "react";

export const Portfolio = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const galleriesElement = galleries.map((gallery) => {
    const isExplicit = gallery.explicit;
    console.log(gallery);

    const handleNavigate = () => {
      if (isExplicit) {
        setIsDialogOpen(true);
      } else {
        navigate(`/portfolio/${gallery.url}`);
      }
    };

    const handleConfirm = () => {
      setIsDialogOpen(false);
      navigate(`/portfolio/${gallery.url}`);
    };

    const handleCancel = () => {
      setIsDialogOpen(false);
    };

    return (
      <React.Fragment key={gallery.url + gallery.id}>
        <button
          className={styles.gallery}
          onClick={() => handleNavigate()}
          key={gallery.id}
        >
          <div className={styles.galleryText}>{gallery.text} </div>
          <img
            className={styles.galleryImg}
            src={
              gallery.preview[
                Math.floor(Math.random() * gallery.preview.length)
              ]
            }
            alt="Snímek z galerie"
          />
          {isExplicit && <div className={styles.galleryTextExplicit}>18 +</div>}
        </button>
        {isExplicit && (
          <ConfirmDialog
            message="Je vám více než 18 let?"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            isOpen={isDialogOpen}
          />
        )}
      </React.Fragment>
    );
  });

  return (
    <section className={styles.main}>
      <article className={styles.heading}>
        <h3>Podívejte se na mou tvorbu.</h3>
        <p>Vyberte si galerii.</p>
      </article>
      <div className={styles.galleries}>{galleriesElement}</div>
    </section>
  );
};

import styles from "./portfolio.module.css";
import commonStyles from "../../common.module.css";
import { useNavigate } from "react-router-dom";
import { galleries } from "../../../public/editable/galleryPaths";
import { useState, Fragment } from "react";
import { ConfirmDialog, Image } from "../../components";

export const Portfolio = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const galleriesElement = galleries.map((gallery) => {
    const isExplicit = gallery.explicit;

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
      <Fragment key={gallery.url + gallery.id}>
        <button
          className={styles.gallery}
          onClick={() => handleNavigate()}
          key={gallery.id}
        >
          <div className={styles.galleryText}>{gallery.text} </div>
          <Image
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
            message="Potvrďte prosím, že už vám bylo 18 let."
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            isOpen={isDialogOpen}
          />
        )}
      </Fragment>
    );
  });

  return (
    <section className={commonStyles.pageWrapper}>
      <article className={commonStyles.heading}>
        <h3>Podívejte se na mou tvorbu.</h3>
        <p>Vyberte si galerii.</p>
      </article>
      <div className={styles.galleries}>{galleriesElement}</div>
    </section>
  );
};

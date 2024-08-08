import { useEffect } from "react";

const InstagramPost = ({ url }: { url: string }) => {
  useEffect(() => {
    // Load Instagram's embed script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="12"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        maxWidth: "1200px",
        minWidth: "326px",
        padding: 0,
        width: "90%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{
            lineHeight: 0,
            padding: "0 0",
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
        >
          Zobrazit profil na instagramu
        </a>
      </div>
    </blockquote>
  );
};

export default InstagramPost;

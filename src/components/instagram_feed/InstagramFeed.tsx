import React, { useEffect, useRef } from "react";
import "../../index.css";
interface InstagramEmbedProps {
  url: string;
}
interface InstgrmEmbeds {
  process: () => void;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: InstgrmEmbeds;
    };
  }
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  const containerRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    // Function to load Instagram script
    const loadInstagramScript = () => {
      if (
        !document.querySelector(
          'script[src="https://www.instagram.com/embed.js"]'
        )
      ) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
      } else {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      }
    };

    loadInstagramScript();
  }, [url]);

  return (
    <blockquote
      className="instagram-media custom-instagram"
      data-instgrm-permalink={url}
      style={{
        background: "#FFF",
        border: "0",
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "1000px",
        minWidth: "326px",
        padding: "0",
        width: "80%",
      }}
      ref={containerRef}
    >
      {/* Instagram content will be injected by the script */}
    </blockquote>
  );
};

export default InstagramEmbed;

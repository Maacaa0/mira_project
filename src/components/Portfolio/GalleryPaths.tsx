 export type GalleryItem = {
  id: number;
  preview: string[];
  url: string;
  text: string;
  gallery: string[];
}

const galleryItems = [
  {
    id: 1,
    preview: ["./images/1.jpg"],
    url: "lode",
    text: "Lodě",
    gallery: [
      "../images/1.jpg",
      "../images/2.jpg",
      "../images/3.jpg",
      "../images/4.jpg",
      "../images/5.jpg",
      "../images/6.jpg",
    ],
  },
  {
    id: 2,
    preview: ["./images/2.jpg"],
    url: "priroda",
    text: "Příroda",
    gallery: [
      "../images/1.jpg",
      "../images/2.jpg",
      "../images/3.jpg",
      "../images/4.jpg",
      "../images/5.jpg",
      "../images/6.jpg",
    ],
  },
  {
    id: 3,
    preview: ["./images/3.jpg", "./images/4.jpg"],
    url: "aviatika",
    text: "Aviatika",
    gallery: [
      "../images/1.jpg",
      "../images/2.jpg",
      "../images/3.jpg",
      "../images/4.jpg",
      "../images/5.jpg",
      "../images/6.jpg",
    ],
  },
  {
    id: 4,
    preview: ["./images/6.jpg"],
    url: "mesta",
    text: "Města",
    gallery: [
      "../images/1.jpg",
      "../images/2.jpg",
      "../images/3.jpg",
      "../images/4.jpg",
      "../images/5.jpg",
      "../images/6.jpg",
    ],
  },
  {
    id: 5,
    preview: ["./images/7.jpg"],
    url: "architektura",
    text: "Architektura",
    gallery: [
      "../images/1.jpg",
      "../images/2.jpg",
      "../images/3.jpg",
      "../images/4.jpg",
      "../images/5.jpg",
      "../images/6.jpg",
    ],
  },
];

export default galleryItems
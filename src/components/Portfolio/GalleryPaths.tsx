interface GalleryItem {
  preview: string[];
  url: string;
  text: string;
  gallery: string[];
}

const galleryItems: GalleryItem[] = [
  {
    preview: ["./images/1.jpg"],
    url: "lode",
    text: "Lodě",
    gallery: [
      "./images/1.jpg",
      "./images/2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",
      "./images/5.jpg",
      "./images/6.jpg",
    ],
  },
  {
    preview: ["./images/2.jpg"],
    url: "priroda",
    text: "Příroda",
    gallery: [
      "./images/1.jpg",
      "./images/2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",
      "./images/5.jpg",
      "./images/6.jpg",
    ],
  },
  {
    preview: ["./images/3.jpg", "./images/4.jpg"],
    url: "aviatika",
    text: "Aviatika",
    gallery: [
      "./images/1.jpg",
      "./images/2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",
      "./images/5.jpg",
      "./images/6.jpg",
    ],
  },
  {
    preview: ["./images/6.jpg"],
    url: "mesta",
    text: "Města",
    gallery: [
      "./images/1.jpg",
      "./images/2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",
      "./images/5.jpg",
      "./images/6.jpg",
    ],
  },
  {
    preview: ["./images/7.jpg"],
    url: "architektura",
    text: "Architektura",
    gallery: [
      "./images/1.jpg",
      "./images/2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",
      "./images/5.jpg",
      "./images/6.jpg",
    ],
  },
];

export default galleryItems
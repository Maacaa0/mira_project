export type GalleryType = {
  id: number;
  preview: string[];
  url: string;
  text: string;
  explicit?: boolean;
  description?: string;
  gallery: string[];
};

export const galleries = [
  {
    id: 1,
    preview: ["../images/portret/Portret_BIG_00054.jpg"],
    url: "portret",
    text: "Portrét",
    description: "text který popisuje tuto galerii",
    gallery: [
      "../images/portret/Portret_BIG_00001.jpg",
      "../images/portret/Portret_BIG_00002.jpg",
      "../images/portret/Portret_BIG_00003.jpg",
      "../images/portret/Portret_BIG_00004.jpg",
      "../images/portret/Portret_BIG_00005.jpg",
      "../images/portret/Portret_BIG_00006.jpg",
      "../images/portret/Portret_BIG_00007.jpg",
      "../images/portret/Portret_BIG_00008.jpg",
      "../images/portret/Portret_BIG_00009.jpg",
      "../images/portret/Portret_BIG_00010.jpg",
      "../images/portret/Portret_BIG_00011.jpg",
      "../images/portret/Portret_BIG_00012.jpg",
      "../images/portret/Portret_BIG_00013.jpg",
      "../images/portret/Portret_BIG_00014.jpg",
      "../images/portret/Portret_BIG_00015.jpg",
      "../images/portret/Portret_BIG_00016.jpg",
      "../images/portret/Portret_BIG_00017.jpg",
      "../images/portret/Portret_BIG_00018.jpg",
      "../images/portret/Portret_BIG_00019.jpg",
      "../images/portret/Portret_BIG_00020.jpg",
      "../images/portret/Portret_BIG_00021.jpg",
      // "../images/portret/Portret_BIG_00022.jpg",
      "../images/portret/Portret_BIG_00023.jpg",
      "../images/portret/Portret_BIG_00024.jpg",
      "../images/portret/Portret_BIG_00025.jpg",
      "../images/portret/Portret_BIG_00026.jpg",
      "../images/portret/Portret_BIG_00027.jpg",
      "../images/portret/Portret_BIG_00028.jpg",
      "../images/portret/Portret_BIG_00029.jpg",
      "../images/portret/Portret_BIG_00030.jpg",
      "../images/portret/Portret_BIG_00031.jpg",
      "../images/portret/Portret_BIG_00032.jpg",
      "../images/portret/Portret_BIG_00033.jpg",
      "../images/portret/Portret_BIG_00034.jpg",
      "../images/portret/Portret_BIG_00035.jpg",
      "../images/portret/Portret_BIG_00036.jpg",
      "../images/portret/Portret_BIG_00037.jpg",
      "../images/portret/Portret_BIG_00038.jpg",
      "../images/portret/Portret_BIG_00039.jpg",
      "../images/portret/Portret_BIG_00040.jpg",
      "../images/portret/Portret_BIG_00041.jpg",
      "../images/portret/Portret_BIG_00042.jpg",
      "../images/portret/Portret_BIG_00043.jpg",
      "../images/portret/Portret_BIG_00044.jpg",
      "../images/portret/Portret_BIG_00045.jpg",
      "../images/portret/Portret_BIG_00046.jpg",
      "../images/portret/Portret_BIG_00047.jpg",
      "../images/portret/Portret_BIG_00048.jpg",
      "../images/portret/Portret_BIG_00049.jpg",
      "../images/portret/Portret_BIG_00050.jpg",
      "../images/portret/Portret_BIG_00051.jpg",
      "../images/portret/Portret_BIG_00052.jpg",
      "../images/portret/Portret_BIG_00053.jpg",
      "../images/portret/Portret_BIG_00054.jpg",
    ],
  },
  {
    id: 2,
    preview: ["../images/rodinne/Rodinne_a_skupinove_BIG_00008.jpg"],
    url: "rodinne-skupinove",
    text: "Rodinné a skupinové",
    description: "text který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galerii text který popisuje tuto galerii text který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galeriitext který popisuje tuto galerii ",
    gallery: [
      "../images/rodinne/Rodinne_a_skupinove_BIG_00001.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00002.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00003.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00004.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00005.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00006.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00007.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00008.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00009.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00010.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00011.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00012.jpg",
      "../images/rodinne/Rodinne_a_skupinove_BIG_00013.jpg",
    ],
  },
  {
    id: 3,
    preview: ["./images/glamour/Glamour a AKT_BIG_00011.jpg"],
    url: "glamour-akt",
    text: "Glamour a AKT",
    description: "text který popisuje tuto galerii",
    explicit: true,
    gallery: [
      "../images/glamour/Glamour a AKT_BIG_00001.jpg",
      "../images/glamour/Glamour a AKT_BIG_00002.jpg",
      "../images/glamour/Glamour a AKT_BIG_00003.jpg",
      "../images/glamour/Glamour a AKT_BIG_00004.jpg",
      "../images/glamour/Glamour a AKT_BIG_00005.jpg",
      "../images/glamour/Glamour a AKT_BIG_00006.jpg",
      "../images/glamour/Glamour a AKT_BIG_00007.jpg",
      "../images/glamour/Glamour a AKT_BIG_00008.jpg",
      "../images/glamour/Glamour a AKT_BIG_00009.jpg",
      "../images/glamour/Glamour a AKT_BIG_00010.jpg",
      "../images/glamour/Glamour a AKT_BIG_00011.jpg",
      "../images/glamour/Glamour a AKT_BIG_00012.jpg",
      "../images/glamour/Glamour a AKT_BIG_00013.jpg",
      "../images/glamour/Glamour a AKT_BIG_00014.jpg",
      "../images/glamour/Glamour a AKT_BIG_00015.jpg",
      "../images/glamour/Glamour a AKT_BIG_00016.jpg",
      "../images/glamour/Glamour a AKT_BIG_00017.jpg",
      "../images/glamour/Glamour a AKT_BIG_00018.jpg",
      "../images/glamour/Glamour a AKT_BIG_00019.jpg",
      "../images/glamour/Glamour a AKT_BIG_00020.jpg",
      "../images/glamour/Glamour a AKT_BIG_00021.jpg",
      "../images/glamour/Glamour a AKT_BIG_00022.jpg",
      "../images/glamour/Glamour a AKT_BIG_00023.jpg",
      "../images/glamour/Glamour a AKT_BIG_00024.jpg",
      "../images/glamour/Glamour a AKT_BIG_00025.jpg",
      "../images/glamour/Glamour a AKT_BIG_00026.jpg",
      "../images/glamour/Glamour a AKT_BIG_00027.jpg",
      "../images/glamour/Glamour a AKT_BIG_00028.jpg",
      "../images/glamour/Glamour a AKT_BIG_00029.jpg",
      "../images/glamour/Glamour a AKT_BIG_00030.jpg",
      "../images/glamour/Glamour a AKT_BIG_00031.jpg",
      "../images/glamour/Glamour a AKT_BIG_00032.jpg",
      "../images/glamour/Glamour a AKT_BIG_00033.jpg",
      "../images/glamour/Glamour a AKT_BIG_00034.jpg",
      "../images/glamour/Glamour a AKT_BIG_00035.jpg",
      "../images/glamour/Glamour a AKT_BIG_00036.jpg",
      "../images/glamour/Glamour a AKT_BIG_00037.jpg",
      "../images/glamour/Glamour a AKT_BIG_00038.jpg",
      "../images/glamour/Glamour a AKT_BIG_00039.jpg",
      "../images/glamour/Glamour a AKT_BIG_00040.jpg",
      "../images/glamour/Glamour a AKT_BIG_00041.jpg",
      "../images/glamour/Glamour a AKT_BIG_00042.jpg",
      "../images/glamour/Glamour a AKT_BIG_00043.jpg",
      "../images/glamour/Glamour a AKT_BIG_00044.jpg",
      "../images/glamour/Glamour a AKT_BIG_00045.jpg",
      "../images/glamour/Glamour a AKT_BIG_00046.jpg",
      "../images/glamour/Glamour a AKT_BIG_00047.jpg",
      "../images/glamour/Glamour a AKT_BIG_00048.jpg",
      "../images/glamour/Glamour a AKT_BIG_00049.jpg",
      "../images/glamour/Glamour a AKT_BIG_00050.jpg",
      "../images/glamour/Glamour a AKT_BIG_00051.jpg",
      "../images/glamour/Glamour a AKT_BIG_00052.jpg",
      "../images/glamour/Glamour a AKT_BIG_00053.jpg",
      "../images/glamour/Glamour a AKT_BIG_00054.jpg",
      "../images/glamour/Glamour a AKT_BIG_00055.jpg",
      "../images/glamour/Glamour a AKT_BIG_00056.jpg",
      "../images/glamour/Glamour a AKT_BIG_00057.jpg",
    ],
  },
  {
    id: 4,
    preview: ["../images/letadla/Letadla_BIG_00011.jpg"],
    url: "aviatika",
    text: "Aviatika",
    description: "text který popisuje tuto galerii",
    gallery: [
      "../images/letadla/Letadla_BIG_00001.jpg",
      "../images/letadla/Letadla_BIG_00002.jpg",
      "../images/letadla/Letadla_BIG_00003.jpg",
      "../images/letadla/Letadla_BIG_00004.jpg",
      "../images/letadla/Letadla_BIG_00005.jpg",
      "../images/letadla/Letadla_BIG_00006.jpg",
      "../images/letadla/Letadla_BIG_00007.jpg",
      "../images/letadla/Letadla_BIG_00008.jpg",
      "../images/letadla/Letadla_BIG_00009.jpg",
      "../images/letadla/Letadla_BIG_00010.jpg",
      "../images/letadla/Letadla_BIG_00011.jpg",
      "../images/letadla/Letadla_BIG_00012.jpg",
      "../images/letadla/Letadla_BIG_00013.jpg",
      "../images/letadla/Letadla_BIG_00014.jpg",
      "../images/letadla/Letadla_BIG_00015.jpg",
      "../images/letadla/Letadla_BIG_00016.jpg",
      "../images/letadla/Letadla_BIG_00017.jpg",
    ],
  },
  {
    id: 5,
    preview: ["../images/architektura/Architektura_BIG_00015.jpg"],
    url: "architektura",
    text: "Architektura",
    description: "text který popisuje tuto galerii",
    gallery: [
      "../images/architektura/Architektura_BIG_00001.jpg",
      "../images/architektura/Architektura_BIG_00002.jpg",
      "../images/architektura/Architektura_BIG_00003.jpg",
      "../images/architektura/Architektura_BIG_00004.jpg",
      "../images/architektura/Architektura_BIG_00005.jpg",
      "../images/architektura/Architektura_BIG_00006.jpg",
      "../images/architektura/Architektura_BIG_00007.jpg",
      "../images/architektura/Architektura_BIG_00008.jpg",
      // "../images/architektura/Architektura_BIG_00009.jpg",
      "../images/architektura/Architektura_BIG_00010.jpg",
      "../images/architektura/Architektura_BIG_00011.jpg",
      "../images/architektura/Architektura_BIG_00012.jpg",
      "../images/architektura/Architektura_BIG_00013.jpg",
      "../images/architektura/Architektura_BIG_00014.jpg",
      "../images/architektura/Architektura_BIG_00015.jpg",
      "../images/architektura/Architektura_BIG_00016.jpg",
      "../images/architektura/Architektura_BIG_00017.jpg",
      "../images/architektura/Architektura_BIG_00018.jpg",
      "../images/architektura/Architektura_BIG_00019.jpg",
    ],
  },

  {
    id: 6,
    preview: ["../images/reference/Reference_BIG_00007.jpg"],
    url: "reference",
    text: "Reference",
    description: "text který popisuje tuto galerii",
    gallery: [
      "../images/reference/Reference_BIG_00001.jpg",
      "../images/reference/Reference_BIG_00002.jpg",
      "../images/reference/Reference_BIG_00003.jpg",
      "../images/reference/Reference_BIG_00004.jpg",
      "../images/reference/Reference_BIG_00005.jpg",
      "../images/reference/Reference_BIG_00006.jpg",
      "../images/reference/Reference_BIG_00007.jpg",
      "../images/reference/Reference_BIG_00008.jpg",
      "../images/reference/Reference_BIG_00009.jpg",
      "../images/reference/Reference_BIG_00010.jpg",
      "../images/reference/Reference_BIG_00011.jpg",
      "../images/reference/Reference_BIG_00012.jpg",
      "../images/reference/Reference_BIG_00013.jpg",
      "../images/reference/Reference_BIG_00014.jpg",
      "../images/reference/Reference_BIG_00015.jpg",
      "../images/reference/Reference_BIG_00016.jpg",
      "../images/reference/Reference_BIG_00017.jpg",
      "../images/reference/Reference_BIG_00018.jpg",
      "../images/reference/Reference_BIG_00019.jpg",
    ],
  },
];

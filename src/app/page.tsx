// pages/index.tsx

import CustomCard from "@/components/CustomCard";
import ImagePagination from "@/components/Pagination";
import React from "react";

const images = [
  {
    id: 1,
    title: "Thimesh Dilshan",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/book 1.jpg", // Example URL for an image in the public directory
  },
  {
    id: 2,
    title: "Card 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/book 2.jpg", // Example URL for an image in the public/images directory
  },
  {
    id: 3,
    title: "Card 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/book 3.jpg", // Example URL for another image in the public/images directory
  },
  {
    id: 4,
    title: "Card 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/book 4.jpg", // Example URL for another image in the public/images directory
  },
  {
    id: 5,
    title: "Card 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/book 5.jpg", // Example URL for another image in the public/images directory
  },
  {
    id: 6,
    title: "Card 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/book 6.jpg", // Example URL for another image in the public/images directory
  },
  {
    id: 7,
    title: "Card 7",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it .",
    imageUrl: "/book 7.jpg", // Example URL for another image in the public/images directory
  },
  {
    id: 8,
    title: "Card 8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it .",
    imageUrl: "/book 8.jpg", // Example URL for another image in the public/images directory
  },
  {
    id: 9,
    title: "Card 8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it .",
    imageUrl: "/book 9.jpg", // Example URL for another image in the public/images directory
  },

  // Add more images as needed
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center px-52">
      <h1 className="flex justify-center items-center text-[36px] font-bold text-cent">Custom Card Gallery</h1>
      <ImagePagination images={images} itemsPerPage={4} />
  
    </div>
  );
};

export default Home;

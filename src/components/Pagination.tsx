// components/ImagePagination.tsx
"use client"
import React, { useState } from "react";
import Card from "./Card";

interface Image {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // Ensure each Image object includes an imageUrl
}

interface ImagePaginationProps {
  images: Image[];
  itemsPerPage: number;
}

const ImagePagination: React.FC<ImagePaginationProps> = ({
  images,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Calculate index range for currently visible items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate the range of page numbers to display (1 - 10)
  const pageNumbers = [];
  if (totalPages <= 10) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Display 10 pages centered around the current page
    let start = Math.max(1, currentPage - 4);
    let end = Math.min(currentPage + 5, totalPages);

    if (currentPage <= 5) {
      end = 10;
    } else if (currentPage > totalPages - 5) {
      start = totalPages - 9;
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="image-pagination">
      <div className="card-list">
        {currentItems.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl} // Pass imageUrl prop
          />
        ))}
      </div>
      <div className="pagination-controls flex justify-center">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages} >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImagePagination;

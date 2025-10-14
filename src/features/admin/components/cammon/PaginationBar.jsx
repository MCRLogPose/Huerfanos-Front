"use client";
import { Pagination } from "flowbite-react";

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
  //if (totalPages <= 1) return null;

  return (

      <div className="flex justify-center mt-10 mb-5">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
          previousLabel="Atrás"
          nextLabel="Siguiente"
        />
      </div>

  );
};

export default PaginationBar;

// components/PaginationBasic.js
import React from 'react';
import styles from '@/styles/PaginationBasic.module.css';

function PaginationBasic({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.pageItem} ${currentPage === 1 ? styles.disabled : ''}`}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          className={`${styles.pageItem} ${currentPage === index + 1 ? styles.active : ''}`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`${styles.pageItem} ${currentPage === totalPages ? styles.disabled : ''}`}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
}

export default PaginationBasic;

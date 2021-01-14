import React from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({
  currentPage,
  totalPages,
  handlePreviousPageClick,
  handleNextPageClick,
  isLoading,
}) => {
  if (isLoading !== false) return null;
  return (
    <div className='Pagination'>
      {currentPage > 1 ? (
        <Button onClick={handlePreviousPageClick}>Previous</Button>
      ) : (
        <Button disabled>Previous</Button>
      )}
      {currentPage < totalPages ? (
        <Button onClick={handleNextPageClick}>Next</Button>
      ) : (
        <Button disabled>Next</Button>
      )}
    </div>
  );
};

export default Pagination;

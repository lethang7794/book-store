import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({
  handleSearchFormSubmit,
  handleSearchInputChange,
  searchInput,
}) => {
  return (
    <>
      <Form
        inline
        onSubmit={handleSearchFormSubmit}
        className='m-4 justify-content-center'
      >
        <Form.Control
          type='text'
          placeholder='🔎'
          className='mr-2'
          onChange={handleSearchInputChange}
          value={searchInput}
        />
        <Button variant='primary' type='submit'>
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchForm;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({ handleSearchFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Form
        inline
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchFormSubmit(searchTerm);
        }}
        className='m-4 justify-content-center'
      >
        <Form.Control
          type='text'
          placeholder='🔎'
          className='mr-2 mt-2'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
        <Button variant='primary' type='submit' className='mt-2'>
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchForm;

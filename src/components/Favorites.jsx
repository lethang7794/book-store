import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Books from './Books';

const Favorites = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchFavorite() {
      setIsLoading(true);

      let message;
      try {
        const BACKEND_API = process.env.REACT_APP_BACKEND_API;
        const url = `${BACKEND_API}/favorites`;

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setFavorites(data);
        } else {
          message = `Sorry. Something went wrong while we were loading for your favorite books. (${response.message})`;
        }
      } catch (error) {
        message = `Sorry. We can't connect to the server.`;
      }
      if (message) toast.warn(message);

      setIsLoading(false);
    }
    fetchFavorite();
  }, []);

  return (
    <>
      <h1 className='text-center'>Favorites</h1>
      {isLoading ? <div>Loading</div> : <Books books={favorites} />}
      <ToastContainer
        transition={Zoom}
        position='bottom-right'
        newestOnTop
        limit={3}
      />
    </>
  );
};

export default Favorites;

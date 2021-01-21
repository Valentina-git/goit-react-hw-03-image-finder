import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import ImageGallery from '../imageGallery/ImageGallery';
import Searchbar from '../searchbar/Searchbar';
import WrapperGallery from './styledGallery';
import fetchImages from '../../api/Api';

const initialState = {
  images: [],
  page: 1,
  query: '',
  modalIsOpen: false,
  largeImageUrl: '',
  largeImageAlt: '',
  isLoading: false,
  error: null,
};

const GalleryImages = () => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    if (state.page > 2) {
      window.scrollBy({
        top:
          document.documentElement.clientHeight -
          document.querySelector('.Button').clientHeight -
          document.querySelector('.Searchbar').clientHeight,
        behavior: 'smooth',
      });
    }
  }, [state.page]);

  const setLoading = () => {
    setState(prev => ({
      ...prev,
      isLoading: !prev.isLoading,
    }));
  };

  const resetError = () => {
    setState(prev => ({ ...prev, error: '' }));
  };

  const getQuery = async (query, page) => {
    try {
      if (query === '') return;
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      resetError();
      setLoading();

      const result = await fetchImages(query, page);
      setState(prev => ({
        ...prev,
        images: [...result.data.hits],
        page: 2,
        query: query,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({ ...prev, error: error }));
    }
  };

  const LoadMore = async () => {
    const { query, page } = state;
    const result = await fetchImages(query, page);
    setState(prev => ({
      ...prev,
      images: [...prev.images, ...result.data.hits],
      page: prev.page + 1,
      isLoading: false,
    }));
  };

  const openInModal = e => {
    if (e.target.nodeName !== 'IMG') return;
    setState(prev => ({
      ...prev,
      largeImageUrl: e.target.dataset.largeimageurl,
      largeImageAlt: e.target.alt,
      modalIsOpen: true,
    }));
  };

  const closeModal = e => {
    setState(prev => ({
      ...prev,
      largeImageUrl: '',
      largeImageAlt: '',
      modalIsOpen: false,
    }));
  };

  const {
    images,
    isLoading,
    modalIsOpen,
    largeImageUrl,
    largeImageAlt,
  } = state;

  return (
    <WrapperGallery>
      <Searchbar getQuery={getQuery} />
      {isLoading && <h2>... Loading</h2>}
      <ImageGallery images={images} openInModal={openInModal} />
      {images.length > 0 && <Button onBtnClick={LoadMore} title="Load More" />}
      {modalIsOpen && (
        <Modal
          largeImageUrl={largeImageUrl}
          largeImageAlt={largeImageAlt}
          onCloseModal={closeModal}
        />
      )}
    </WrapperGallery>
  );
};

export default GalleryImages;

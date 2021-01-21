import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import WrapperImageGallery from './StyledImageGallery';

const ImageGallery = ({ images, openInModal }) => {
  return (
    <WrapperImageGallery>
      <ul className="ImageGallery" onClick={openInModal}>
        {images.map((item, index) => (
          <ImageGalleryItem image={item} key={`${item.id}${index}`} />
        ))}
      </ul>
    </WrapperImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openInModal: PropTypes.func.isRequired,
};

export default ImageGallery;

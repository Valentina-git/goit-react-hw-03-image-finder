import React from 'react';
import PropTypes from 'prop-types';
import WrapperImageGalleryItem from './StyledImageGalleryItem';

const ImageGalleryItem = ({ image }) => {
  return (
    <WrapperImageGalleryItem>
      <img
        src={image.webformatURL}
        alt={image.tags}
        data-largeimageurl={image.largeImageURL}
        className="ImageGalleryItem-image"
      />
    </WrapperImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageGalleryItem;

import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ imageItem }) => {
  return (
    <Gallery>
      {imageItem.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            previeImg={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  imageItem: PropTypes.array.isRequired,
};

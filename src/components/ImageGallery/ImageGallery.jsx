import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imageItem }) => {
  return (
    <ul>
      {imageItem.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryItem key={id} previeImg={webformatURL} />
        
      })}
    </ul>
  );
};

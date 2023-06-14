import { Component } from 'react';
import { Item } from './ImageGalleryItem.styled';
import { ModalComponent } from 'components/ModalComponent/ModalComponent';
import PropTypes from 'prop-types';


export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    clickedImage: null,
  };

  openModal = () => {
    const { largeImageURL } = this.props;
    this.setState({
      isModalOpen: true,
      clickedImage: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      clickedImage: null,
    });
  };

  render() {
    const { previeImg } = this.props;
    const { isModalOpen, clickedImage } = this.state;
    return (
      <Item onClick={this.openModal}>
        <img src={previeImg} alt="img" />
        {isModalOpen && (
          <ModalComponent
            isOpen={isModalOpen}
            clickedImage={clickedImage}
            closeModal={this.closeModal}
            
          />
        )}
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  previeImg: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
}
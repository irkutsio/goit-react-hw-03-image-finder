import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Img } from './ModalComponent.styled';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalComponent = ({ isOpen, clickedImage, closeModal }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
    >
      {clickedImage && <Img src={clickedImage} alt="img" />}
    </Modal>
  );
};


ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  clickedImage: PropTypes.string.isRequired, 
  closeModal: PropTypes.func.isRequired,
}
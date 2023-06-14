import PropTypes from 'prop-types';
import { Container } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <Container>
      <button onClick={loadMore}>Load more</button>
    </Container>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

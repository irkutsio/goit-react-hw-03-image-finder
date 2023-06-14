import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'services/imageSearch';
import { Spinner } from './Loader/Loader';
import { Button } from './Button/Button';
import { Warning } from './Warnings/Warning.styled';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    isEmpty: false,
    isShowBtn: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page, images } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
    if (prevState.images.length !== images.length) {
      setTimeout(() => {
        window.scrollBy({
          top: 1150,
          behavior: 'smooth',
        });
      }, 1000);
    }
  }

  handleSubmit = value => {
    this.setState({
      query: value,
      page: 1,
      images: [],
      isEmpty: false,
      isShowBtn: false,
    });
  };

  handleLoadingMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  getImages = async (query, page) => {
    this.setState({ isLoading: true });
    try {
      const imageObj = await fetchImages(query, page);

      if (!imageObj.hits.length) {
        this.setState({
          isEmpty: true,
        });
        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...imageObj.hits],
        isShowBtn: this.state.page * 12 < imageObj.totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, isEmpty, error, isShowBtn } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Spinner />}
        {isEmpty && <Warning>Sorry! there are no images...😒</Warning>}
        {error && <Warning>{error} 😡</Warning>}
        <ImageGallery imageItem={images} />
        {isShowBtn && <Button loadMore={this.handleLoadingMore} />}
      </div>
    );
  }
}

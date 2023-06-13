import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'services/imageSearch';
import { Spinner } from './Loader/Loader';
import { Button } from './Button/Button';

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

  // componentDidMount() {
  // fetchImages('dog', 1);
  // }

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
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
      console.log(imageObj.total);
      console.log(imageObj);

      if (!imageObj.hits.length) {
        this.setState({
          isEmpty: true,
        });
        return;
      }
      this.setState((prevState)=>({
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
        {isEmpty && <p>Sorry! there are no images...😒</p>}
        {error && <p>{error} 😡</p>}
        <ImageGallery imageItem={images} />
        {isShowBtn && <Button loadMore={this.handleLoadingMore} />}
      </div>
    );
  }
}

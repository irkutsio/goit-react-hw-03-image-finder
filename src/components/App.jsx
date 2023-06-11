import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'services/imageSearch';

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

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.getImages(query, page);
    }
    console.log(this.state.images)
  }

  getImages = async (query, page) => {
    const imageArr = await fetchImages(query, page);
this.setState({
      images: [...imageArr],
    });
    console.log(this.state.images);
  };

  handleSubmit = value => {
    this.setState({ query: value });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery />
      </div>
    );
  }
}

import { Component } from 'react';
import { Header } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchField: '',
  };

  handleChange = e => {
    this.setState({
      searchField: e.target.value.trim(),
    });
  };

handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchField)
    this.setState({searchField:''})
}

  render() {
    const { searchField } = this.state;
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={searchField}
            name="searchField"
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
          />
        </form>
      </Header>
    );
  }
}
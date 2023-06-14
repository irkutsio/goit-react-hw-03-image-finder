import { Component } from 'react';
import { Header } from './Searchbar.styled';
import { BsSearch } from "react-icons/bs";

export class Searchbar extends Component {
  state = {
    searchField: '',
  };

  handleChange = e => {
    this.setState({
      searchField: e.target.value.trim(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchField);
    this.setState({ searchField: '' });
  };

  render() {
    const { searchField } = this.state;
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search<BsSearch size={13} style={{marginLeft:'4px'}}/></span>
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

import React, { Component } from 'react';
// same thing as const Component = React.Component
// const SearchBar = () => {
//   return <input />; // React.createElement
// };

class SearchBar extends Component {
  constructor(props) { // init of class
    super(props); // inherit from parant class Component

    this.state = {term: ''}; // starting value
  }

  render() {    // on - name of event = {reference to the method}
    // return <input onChange={this.onInputChange} />;
    // return <input onChange={ event => console.log(event.target.value)} />;
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}



export default SearchBar;

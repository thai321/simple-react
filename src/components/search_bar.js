import React, { Component } from 'react';
// same thing as const Component = React.Component
// const SearchBar = () => {
//   return <input />; // React.createElement
// };

class SearchBar extends Component {
  constructor(props) { // init of class
    super(props); // inherit from parant class Component

    this.state = {term: 'Starting value'}; // starting value
  }

  render() {    // on - name of event = {reference to the method}
    // return <input onChange={this.onInputChange} />;
    // return <input onChange={ event => console.log(event.target.value)} />;
    return (
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})} />
      </div>
    );
  }
}



export default SearchBar;

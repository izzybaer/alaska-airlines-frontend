import React from 'react';
import SearchForm from '../search-form';
import AutoComplete from 'material-ui/AutoComplete';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.flights.map((item, i) => {
          return (
            <li key={i}>
              {item.data.to} - {item.data.from}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SearchResults;
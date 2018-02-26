import React from 'react';
import SearchForm from '../search-form';
import AutoComplete from 'material-ui/AutoComplete';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props', this.props);
    return (
      <ul>
        {this.props.flights.map((item, i) => {
          return <li key={i}>
              {item.To} - {item.From} - {item.FlightNumber} - {item.Departs} - {item.Arrives} - {item.MainCabinPrice} - {item.FirstClassPrice}
            </li>;
        })}
      </ul>
    );
  }
}

export default SearchResults;
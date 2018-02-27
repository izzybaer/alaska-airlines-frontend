import React from 'react';
import './search-results.scss';
import SearchForm from '../search-form';
import AutoComplete from 'material-ui/AutoComplete';
import {GridList, GridTile} from 'material-ui/Gridlist';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedByPrice: false,
      sortedByDeparture: false,
    };
    this.handlePriceSort = this.handlePriceSort.bind(this);
    this.handleDepartureSort = this.handleDepartureSort.bind(this);
  }
  
 
  handlePriceSort(flights) {
    const priceSortedFlights = this.props.flights.sort((a, b) => a.Price - b.Price);
    this.setState({ sortedByPrice: true });
  }

  handleDepartureSort(flights) {
    const departureSortedFlights = this.props.flights.sort((a, b) => a.Arrives - b.Departs);
    this.setState({ sortedByDeparture: true });
  }

  render() {
    const style = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        overflowY: 'auto',
        fontFamily: 'Source Serif Pro',
        borderColor: '#174266',
        marginTop: '50px',
      },
      gridTile: {
        border: '#174266',
        fontFamily: 'Roboto, sans-serif',
      },
    };
    return (
      <div className='search-results'>
        <div className='sorting-buttons'>
          <h2>
            <p> Sort By: </p> 
            <RaisedButton
              label='Price'
              style={{display: 'inline-block', marginRight: '20px'}}
              onClick={() => this.handlePriceSort(this.state.sortedByPrice)}
            />
          
            <RaisedButton
              label='Departure'
              style={{display: 'inline-block', marginLeft: '20px'}}
              onClick={() => this.handleDepartureSort(this.state.sortedByDeparture)}
            />
          </h2>
        </div>
        <GridList
          cellHeight={50}
          padding={1}
          cols={1}
          style={style.gridList}>
          {this.props.flights.map(flight => {
            return <GridTile style={{ fontFamily: 'Roboto, sans-serif' }} key={flight} title={this.props.flights.From} cols={1} rows={2}>
              <div className='flight-content'>
                <ul style={{ listStyle: 'none', display: 'inline-block' }}>
                  <li>{flight.FlightNumber}</li>
                  <li>{flight.From}</li>
                  <li>{flight.Departs}</li>
                  <li>{flight.To}</li>
                  <li>{flight.Arrives}</li>
                  <li>{flight.MainCabinPrice}</li>
                  <li>{flight.FirstClassPrice}</li>
                </ul>
              </div>
            </GridTile>;
          })}
        </GridList>
      </div>
    );
  }
}

export default SearchResults;
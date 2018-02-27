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
      dataSet: null,
    };
    this.handleFirstClassPrice = this.handleFirstClassPrice.bind(this);
    this.handleMainCabinPrice = this.handleMainCabinPrice.bind(this);
    this.handleDepartureSort = this.handleDepartureSort.bind(this);
  }

  handleMainCabinPrice(flights) {
    const mainSort = this.props.flights.sort((a, b) => a.MainCabinPrice - b.MainCabinPrice);
    this.setState({ dataSet: mainSort });
  }

  handleFirstClassPrice(flights) {
    const firstSort = this.props.flights.sort((a, b) => a.FirstClassPrice - b.FirstClassPrice);
    this.setState({ dataSet: firstSort });
  }

  handleDepartureSort(flights) {
    const departSort = this.props.flights.sort((a, b) => a.DepartsMilitary - b.DepartsMilitary
    );
    this.setState({ dataSet: departSort });
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
      }
    };
    return (
      <div className='search-results'>
        <div className='sorting-buttons'>
          <h2>
            <p> Sort By: </p>
            <RaisedButton
              label='First Class Price'
              style={{ display: 'inline-block', marginRight: '20px' }}
              onClick={() => this.handleFirstClassPrice(this.state.dataSet)}
            />

            <RaisedButton
              label='Main Cabin Price'
              style={{ display: 'inline-block', marginLeft: '20px' }}
              onClick={() => this.handleMainCabinPrice(this.state.dataSet)}
            />

            <RaisedButton
              label='Departure'
              style={{ display: 'inline-block', marginLeft: '20px' }}
              onClick={() => this.handleDepartureSort(this.state.dataSet)}
            />
          </h2>
        </div>
        <GridList cellHeight={50} padding={1} cols={1} style={style.gridList}>
          {this.props.flights.map(flight => {
            return (
              <GridTile
                style={{ fontFamily: 'Roboto, sans-serif' }}
                key={flight.id}
                title={this.props.flights.From}
                cols={1}
                rows={2}
              >
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
              </GridTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

export default SearchResults;
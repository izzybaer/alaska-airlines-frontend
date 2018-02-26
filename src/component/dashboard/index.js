import React from 'react';
import superagent from 'superagent';
import SearchForm from '../search-form';
import SearchResults from '../search-results';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [],
      hasSearched: false,
      locations: ['Seattle, WA', 'Las Vegas, NV', 'Los Angeles, CA', 'Pheonix, AZ'],
    };
    
  }

  componentWillMount() {
    return superagent.get(`${__API_URL__}/api/flights/SEA/LAX`)
      .then(res => {
        localStorage.setItem('res.body', JSON.stringify(res));
      }).catch(err => console.log(err));
  }
  


  render() {
    return(
      <div className='dashboard'>
        {this.state.hasSearched ? (
          <SearchResults flights={this.state.flights}/>
        ) : (
          <SearchForm locations={this.state.locations}/>
        )}
      </div>
    );
  }
}

export default Dashboard;
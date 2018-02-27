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


  render() {
    return(
      <div className='dashboard'>
        <SearchForm locations={this.state.locations}/>
      </div>
    );
  }
}

export default Dashboard;
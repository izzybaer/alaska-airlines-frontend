import React from 'react';
import SearchForm from '../search-form';
import SearchResultsList from '../search-results';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [],
    };

    // handleSearch(flight) {

    // }
  }

  render() {
    return(
      <div className='dashboard'>
        <SearchForm />
      </div>
    );
  }
}

export default Dashboard;
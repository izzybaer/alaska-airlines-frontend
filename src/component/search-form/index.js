import React from 'react';
import superagent from 'superagent';
import SearchResults from '../search-results';
import RaisedButton from 'material-ui/RaisedButton';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      to: '',
      from: '',
      flights: [],
      hasError: false,
      hasSearched: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeparture = this.handleDeparture.bind(this);
    this.handleDestination = this.handleDestination.bind(this);
  }

  // onClick handleSubmit will fetch the data from the backend
  // and set hasSearched to true on the state
  handleSubmit(e) {
    e.preventDefault();
    console.log(`${__API_URL__}`);
    return superagent.get(`${__API_URL__}/api/flights/${this.state.from}/${this.state.to}`)
      .then(res => {
        this.setState({
          flights: [...res.body],
          hasSearched: true,
        });
      }).catch(err => {
        this.setState({
          hasError: true,
        });
      });
  }

  // onChange handleDeparture will set the state
  handleDeparture(e) {
    this.setState({from: e.target.value});
  }

  // onChange handleDestination will set the state
  handleDestination(e) {
    this.setState({to: e.target.value});
  }

  render() {
    const style = { margin: 12 };

    console.log(this.state, '__STATE__');

    return(
      <div className='search-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            className='departure-input'
            value={this.state.from}
            placeholder='Seattle, WA (SEA-Seattle/Tacoma Intl.)'
            onChange={this.handleDeparture}
          />
          <input
            type='text'
            className='destination-input'
            value={this.state.to}
            placeholder='San Francisco, CA(SFO-San Francisco Intl.)'
            onChange={this.handleDestination}
          />
          <RaisedButton type='submit' label='FIND FLIGHTS' style={style}/>
        </form>
        {/* <SearchResults flights={this.state.flights}/> */}
      </div>
    );
  }
}

export default SearchForm;
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      to: '',
      from: '',
      flights: [],
      hasSearched: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeparture = this.handleDeparture.bind(this);
    this.handleDestination = this.handleDestination.bind(this);
  }

  // onClick handleSubmit will fetch the data from the backend
  // and set hasSearched to true on the state
  handleSubmit() {
    this.setState({hasSearched: true});
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
          <RaisedButton />
        </form>
      </div>
    );
  }

}
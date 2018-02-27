import React from 'react';
import superagent from 'superagent';
import SearchResults from '../search-results';
import TextField from 'material-ui/TextField';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Col, Form, FormGroup} from 'react-bootstrap';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      to: '',
      from: '',
      flights: [],
      hasError: false,
      hasSearched: false,
      locations: ['Seattle, WA', 'Las Vegas, NV', 'Los Angeles, CA', 'Pheonix, AZ'],
      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeparture = this.handleDeparture.bind(this);
    this.handleDestination = this.handleDestination.bind(this);
  }

  // onClick handleSubmit will fetch the data from the backend
  // and set hasSearched to true on the state
  handleSubmit(e) {
    e.preventDefault();
    return superagent.get(`${__API_URL__}/api/flights/${this.state.from}/${this.state.to}`)
      .then(res => {
        this.setState({
          flights: [...res.body],
          hasSearched: true,
        });
        console.log(this.state.flights);
      }).catch(err => {
        this.setState({
          hasError: true,
        });
      });
  }

  // onChange handleDeparture will set the state
  handleDeparture(e) {
    this.setState({ from: `${e.target.value}`.toUpperCase() });
  }

  // onChange handleDestination will set the state
  handleDestination(e) {
    this.setState({ to: `${e.target.value}`.toUpperCase() });
  }

  render() {
    const style = { 
      margin: 12,
      textField: {
        marginTop: '10px',
        marginLeft: '30%',
        display: 'inline-block',
        underlineStyle: {
          borderColor: '#174266',
        },
        underlineFocusStyle: {
          borderColor: '#174266',
        },
        floatingLabelStyle: {
          color: '#174266',
        },
        floatingLabelFocusStyle: {
          color: '#174266',
        },
      },
      card: {
        margin: '0 auto',
        header: {
          marginLeft: '15px',
        },
        height: '260px',
        width: '50%',
      },
      button: {
        margin: '0 auto',
        height: '60px',
        width: '200px',
      },
      buttonText: {
        fontSize: '50px',
        textAlign: 'center',
      },
    };

    return(
      <div>
        <h1 
          style={{fontFamily: 'Roboto, sans-serif', fontSize: '20px', textAlign: 'center'}}>
          Search For Flights</h1>
        <Card
          style={style.card}
        >
          <Form
            horizontal
            className='search-form'
            onSubmit={this.handleSubmit}>
            <Col sm={4}>
              <TextField
                inputStyle={{display: 'inline-block'}}
                underlineStyle={style.textField.underlineStyle}
                underlineFocusStyle={style.textField.underlineFocusStyle}
                floatingLabelStyle={style.textField.floatingLabelStyle}
                floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}
                style={style.textField}
                floatingLabelFixed={true}
                floatingLabelText='From'
                hintText='departing from..'
                value={this.state.from}
                onChange={this.handleDeparture}

              />
            </Col>

            <Col sm={4}>
              <TextField
                inputStyle={{display: 'inline-block'}}
                underlineStyle={style.textField.underlineStyle}
                underlineFocusStyle={style.textField.underlineFocusStyle}
                floatingLabelStyle={style.textField.floatingLabelStyle}
                floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}
                style={style.textField}
                floatingLabelText='To'
                floatingLabelFixed={true}
                hintText='arriving in..'
                value={this.state.to}
                onChange={this.handleDestination}
              />
            </Col>
            <FormGroup>
             
              <RaisedButton 
                type='submit' 
                label='FIND FLIGHTS' 
                style={{textAlign: 'center', marginLeft: '35%', marginTop:'20px', height: '60px', width: '200px', fontSize: '35px'}} 
              /> 
             
            </FormGroup>
          </Form>
        </Card>
        
        <SearchResults flights={this.state.flights}/>
      </div>
    );
  }
}
export default SearchForm;
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
      button: {
        marginLeft: '40%',
        marginTop: '20px',
        // height: '60px',
      },
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
      // button: {
      //   height: '60px',
      //   width: '200px',
      //   marginLeft: '35%',
      //   marginTop: '15px',
      //   buttonText: {
      //     fontSize: '20px',
      //     textAlign: 'center',
      //   },
      // },
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
                style={style.textField}
                value={this.state.from}
                floatingLabelText='From'
                floatingLabelFixed={true}
                hintText='departing from..'
                onChange={this.handleDeparture}
                inputStyle={{display: 'inline-block'}}
                underlineStyle={style.textField.underlineStyle}
                floatingLabelStyle={style.textField.floatingLabelStyle}
                underlineFocusStyle={style.textField.underlineFocusStyle}
                floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}

              />
            </Col>

            <Col sm={4}>
              <TextField
                value={this.state.to}
                floatingLabelText='To'
                hintText='arriving in..'
                style={style.textField}
                floatingLabelFixed={true}
                onChange={this.handleDestination}
                inputStyle={{display: 'inline-block'}}
                underlineStyle={style.textField.underlineStyle}
                underlineFocusStyle={style.textField.underlineFocusStyle}
                floatingLabelStyle={style.textField.floatingLabelStyle}
                floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}
              />
            </Col>
            <FormGroup>
              <RaisedButton 
                type='submit' 
                label='FIND FLIGHTS' 
                labelColor='#f2f2f2'
                backgroundColor='#476c21'
                style={style.button}
              /> 
            </FormGroup>
          </Form>
        </Card>
        <SearchResults flights={this.state.flights} />
      </div>
    );
  }
}
export default SearchForm;
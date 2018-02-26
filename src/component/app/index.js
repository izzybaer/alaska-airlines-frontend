import React from 'react';
import Dashboard from '../dashboard';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class App extends React.Component{
  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      title: {
        cursor: 'pointer',
      },
      logo: {
        width: '46px',
        height: '46px',
        marginTop: '10px',
        marginLeft: '15px',
      },
      appBar: {
        height: '85px',
        backgroundColor: '#373C3C',
      },
      sidebar: {
        float: 'left',
        height: '1100px',
        width: '275px',
        backgroundColor: '#D6D8D8',
        textAlign: 'center',
        display: 'inline-block',
      },
      menu: {
        fontSize: 20,
        display: 'inline-block',
        margin: '16px 32px 16px 0',
        fontFamily: 'Source Serif Pro',
        fontWeight: 'bolder',
        color: '#373C3C',
      },
      button: {
        margin: 15,
        marginTop: '75px',
        borderRadius: 10,
        fontFamily: 'Source Serif Pro',
        fontSize: 20,
        labelStyle: {
          fontFamily: 'Source Serif Pro',
          fontSize: '22px',
          textTransform: 'none',
          fontWeight: 'bolder',
          color: '#373C3C',
        },
      },
    };
    const muiTheme = getMuiTheme({
      inputs: {
        padding: '1px',
        margin: '0 auto',
        marginTop: '10px',
        marginRight: '30px',
        color: '#DDDDDD',
        borderRadius: '8px',
        backgroundColor: 'white',
        fontFamily: 'Source Serif Pro',
        fontColor: '#E7E7E7',
      },
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='app'>
          <BrowserRouter>
            <div>
              <header>
                <h1> Flight Tracker </h1>
              </header>
              <Route exact path='/' component={Dashboard} />
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}
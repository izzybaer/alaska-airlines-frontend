import './app.scss';
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
        fontFamily: 'Roboto, sans-serif',
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
        height: '50px',
        backgroundColor: '#174266',
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
        fontFamily: 'Roboto, sans-serif',
        fontColor: '#E7E7E7',
      },
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='app'>
          <AppBar 
            style={{height: '130px', marginBottom: '3%', backgroundColor: '#174266'}} 
            showMenuIconButton={false}
          />
          <BrowserRouter>
            <div>
              <Route exact path='/' component={Dashboard} />
            </div>
          </BrowserRouter>
          <footer>
          Created By Izzy Baer
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}
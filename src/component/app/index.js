import './app.scss';
import React from 'react';
import Dashboard from '../dashboard';
import AppBar from 'material-ui/AppBar';
import SearchForm from '../search-form';
import SearchResults from '../search-results';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        color: '#DDDDDD',
        margin: '0 auto',
        marginTop: '10px',
        marginRight: '30px',
        borderRadius: '8px',
        fontColor: '#E7E7E7',
        backgroundColor: 'white',
        fontFamily: 'Roboto, sans-serif',
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
              <Route exact path='/search' component={SearchForm} />
              <Route exact path='/search/results' component={SearchResults} />
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
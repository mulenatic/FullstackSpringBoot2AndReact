import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';
import Login from './components/Login';

function App() {
    return (
	<div className="App">
	  <AppBar position="static" color="default">
	    <Toolbar>
	      <Typography variant="h6" color="inherit">
		CarList
	      </Typography>
	    </Toolbar>
	  </AppBar>
	  <Login />
	</div>
    );
}

export default App;

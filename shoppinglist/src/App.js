import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';

function App() {
    return (
	<div className="App">
	  <AppBar position="static" color="default">
	    <Toolbar>
	      <Typography variant="h6" color="inherit">
		SHOPPINGLIST
	      </Typography>
	    </Toolbar>
	    </AppBar>
	</div>
    );
}

export default App;

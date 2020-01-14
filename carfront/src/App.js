import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';
import CarList from "./components/Carlist";

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
	  <CarList />
	</div>
    );
}

export default App;

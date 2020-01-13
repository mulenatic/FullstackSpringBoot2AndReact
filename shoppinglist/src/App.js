import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';
import AddItem from './AddItem';

function App() {

    const [items, setItems] = React.useState([]);

    const addItem = (item) => {
	setItems([items, ...items]);
    };
    
    return (
	<div className="App">
	  <AppBar position="static" color="default">
	    <Toolbar>
	      <Typography variant="h6" color="inherit">
		SHOPPINGLIST
	      </Typography>
	    </Toolbar>
	  </AppBar>
	  <AddItem addItem={addItem} />
	</div>
    );
}

export default App;

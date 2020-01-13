import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import AddItem from './AddItem';

function App() {

    const [items, setItems] = React.useState([]);

    const addItem = (item) => {
	setItems([item, ...items]);
    };

    const listItems = items.map((item, index) =>
				<ListItem key={index}>
				<ListItemText primary={item.product} secondary={item.amount} />
				</ListItem>);
    
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
	  <List>{listItems}</List>
	</div>
    );
}

export default App;

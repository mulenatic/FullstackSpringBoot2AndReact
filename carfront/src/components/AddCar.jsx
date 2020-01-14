import React, { useState } from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";

const AddCar = (props) => {

    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
	brand: '', model: '', color: '', year: '', fuel: '', price: ''
    });

    const handleClickOpen = () => {
	setOpen(true);
    };

    const handleClickClose = () => {
	setOpen(false);
    };

    const handleChange = (event) => {
	setCar({...car, [event.target.name]: event.target.value});
    };

    const handleSave = () => {
	props.addCar(car);
	handleClickClose();
    };
    
    return (
	<div>
	  <button style={{margin: 10}} onClick={handleClickOpen} >Add Car</button>
	  <Dialog open={open} onClose={handleClickClose}>
	    <DialogTitle>New Car</DialogTitle>
	    <DialogContent>
	      <input type="text" placeholder="Brand" name="brand" value={car.brand} onChange={handleChange}/><br/>
	      <input type="text" placeholder="Model" name="model" value={car.model} onChange={handleChange}/><br/>
	      <input type="text" placeholder="Color" name="color" value={car.color} onChange={handleChange}/><br/>
	      <input type="text" placeholder="Year" name="year" value={car.year} onChange={handleChange}/><br/>
	      <input type="text" placeholder="Price" name="price" value={car.price} onChange={handleChange}/><br/>
	    </DialogContent>
	    <DialogActions>
	      <button onClick={handleClickClose}>Cancel</button>
	      <button onClick={handleSave}>Save</button>
	    </DialogActions>
	  </Dialog>
	</div>
    );
};

export default AddCar;

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

const EditCar = (props) => {

    const[open, setOpen] = useState(false);
    const[car, setCar] = useState(useState({brand: '', model: '', year: '', color: '', price: ''}));

    const handleClickOpen = () => {
	setCar({brand: props.car.brand, model: props.car.model, year: props.car.year, color: props.car.color, price: props.car.price});
	setOpen(true);
    };

    const handleClose = () => {
	setOpen(false);
    };

    const handleChange = (event) => {
	setCar({...car, [event.target.name]: event.target.value});
    };

    const handleSave = () => {
	props.updateCar(car, props.link);
	handleClose();
    };

    return (
	<div>
	  <Button color="primary" size="small" onClick={handleClickOpen} >Edit</Button>
	  <Dialog open={open} onClose={handleClose}>
	    <DialogTitle>New Car</DialogTitle>
	    <DialogContent>
	      <input type="text" placeholder="Brand" name="brand" value={car.brand} onChange={handleChange}/><br/>
	      <input type="text" placeholder="Model" name="model" value={car.model} onChange={handleChange}/><br/>
	      <input type="text" placeholder="Color" name="color" value={car.color} onChange={handleChange}/><br/>
	      <input type="text" placeholder="Year" name="year" value={car.year} onChange={handleChange}/><br/>
	      <input type="text" placeholder="Price" name="price" value={car.price} onChange={handleChange}/><br/>
	    </DialogContent>
	    <DialogActions>
	      <Button color="secondary" onClick={handleClose}>Cancel</Button>
	      <Button color="primary" onClick={handleSave}>Save</Button>
	    </DialogActions>
	  </Dialog>
	</div>
    );

    

}

export default EditCar;

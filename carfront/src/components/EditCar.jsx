import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';

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
	      <TextField autofocus label="Brand" name="brand" value={car.brand} onChange={handleChange}/><br/>
	      <TextField fullWidth label="Model" name="model" value={car.model} onChange={handleChange}/><br/>
	      <TextField fullWidth label="Color" name="color" value={car.color} onChange={handleChange}/><br/>
	      <TextField fullWidth label="Year" name="year" value={car.year} onChange={handleChange}/><br/>
	      <TextField fullWidth label="Price" name="price" value={car.price} onChange={handleChange}/><br/>
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

import React, { useState } from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, TextField } from "@material-ui/core";

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
	  <Button variant="outlined" color="primary" styel={{margin:10}} onClick={handleClickOpen} >Add Car</Button>
	  <Dialog open={open} onClose={handleClickClose}>
	    <DialogTitle>New Car</DialogTitle>
	    <DialogContent>
	      <TextField autoFocus fullWith label="Brand" name="brand" value={car.brand} onChange={handleChange}/><br/>
	      <TextField fullWidth label="Model" name="model" value={car.model} onChange={handleChange}/><br/>
	      <TextField fullWidth label="Color" name="color" value={car.color} onChange={handleChange}/><br/>
	      <TextField fullWidth label="Year" name="year" value={car.year} onChange={handleChange}/><br/>
	      <TextField fullWidth label="Price" name="price" value={car.price} onChange={handleChange}/><br/>
	    </DialogContent>
	    <DialogActions>
	      <Button color="secondary" onClick={handleClickClose}>Cancel</Button>
	      <Button color="primary"  onClick={handleSave}>Save</Button>
	    </DialogActions>
	  </Dialog>
	</div>
    );
};

export default AddCar;

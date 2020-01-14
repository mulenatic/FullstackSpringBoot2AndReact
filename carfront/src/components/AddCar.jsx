import React, { useState } from 'react';

const AddCar = (props) => {

    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
	brand: '', model: '', color: '', year: '', fuel: '', price: ''
    });
    
    return (
	<div>
	</div>
    );
};

export default AddCar;

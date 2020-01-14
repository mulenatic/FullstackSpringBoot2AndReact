import React, { Component } from 'react';

class Carlist extends Component {

    constructor(props) {
	super(props);
	this.state = { cars: [] };
    };

    componentDidMount() {
	fetch("http://34.89.240.224:8080/api/cars")
	    .then((response) => response.json())
	    .then((responseData) => {
		this.setState({
		    cars: responseData._embedded.cars,
		});
	    })
	    .catch(err => console.log(err));
    };
    
    render() {
	const tableRows = this.state.cars.map((car, index) =>
					 <tr key={index}>
					 <td>{car.brand}</td>
					 <td>{car.model}</td>
					 <td>{car.color}</td>
					 <td>{car.year}</td>
					 <td>{car.price}</td>
					 </tr>
					);
	
	
	return (
	    <div>
	      <table>
		<tbody>{tableRows}</tbody>
	      </table>
	    </div>
	);
    };
}

export default Carlist;

import React, { Component } from 'react';
import {SERVER_URL} from "../constants";
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Carlist extends Component {

    constructor(props) {
	super(props);
	this.state = { cars: [] };
    };

    componentDidMount() {
	this.fetchCars();
    }

    fetchCars = () => {
	fetch(SERVER_URL + "api/cars")
	    .then((response) => response.json())
	    .then((responseData) => {
		this.setState({
		    cars: responseData._embedded.cars,
		});
	    })
	    .catch(err => console.log(err));
    };

    onDelClick = (link) => {
	fetch(link, {method: 'DELETE'})
	    .then(res => {
		toast.success("Car deleted", {
		    position: toast.POSITION.BOTTOM_LEFT
		});
		this.fetchCars();
	    })
	    .catch(err => {
		toast.error("Error when deleting", {
		    position: toast.POSITION.BOTTOM_LEFT
		});
		console.log(err);
	    });
    };
    
    render() {
	const columns = [{
	    Header: 'Brand',
	    accessor: 'brand',
	}, {
	    Header: 'Model',
	    accessor: 'model'
	}, {
	    Header: 'Color',
	    accessor: 'color'
	}, {
	    Header: 'Year',
	    accessor: 'year'
	}, {
	    Header: 'Price $',
	    accessor: 'price'
	}, {
	    id: 'delbutton',
	    sortable: false,
	    filterable: false,
	    width: 100,
	    accessor: '_links.self.href',
	    Cell: ({value}) => (<button onClick={() => { this.onDelClick(value); } }>Delete</button>)
	}];

	return (
	    <div className="Carlist">
	      <ReactTable data={this.state.cars} columns={columns} filterable={true} />
	      <ToastContainer autoClose={1500} />
	    </div>
	);
    };
}

export default Carlist;

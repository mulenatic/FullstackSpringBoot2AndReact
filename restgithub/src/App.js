import React, { useState } from 'react';
import './App.css';
import ReactTable from "react-table-v6";
import 'react-table-v6/react-table.css';

function App() {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState('');

    const fetchData = () => {
	const url = `https://api.github.com/search/repositories?q=${keyword}`;
	fetch(url)
	    .then(response => response.json())
	    .then(responseData => {
		setData(responseData.items);
	    });
    }

    const handleChange = (e) => {
	setKeyword(e.target.value);
    }

    const columns = [{
	Header: 'Name', // Header of the column
	accessor: 'full_name' // Value accessor
    }, {
	Header: 'URL',
	accessor: 'html_url',
    }, {
	Header: 'Owner',
	accessor: 'owner.login'
    }]
    
    return (	<div className="App">
		<input type="text" onChange={handleChange} />
		<button onClick={fetchData} value={keyword} >fetch</button>
		<ReactTable
		data={data}
		columns={columns}
		filterable={true}
		defaultPageSize={5} />
		</div>
	   );
}

export default App;

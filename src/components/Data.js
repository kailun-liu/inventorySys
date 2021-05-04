import SmartDataTable from 'react-smart-data-table'
import 'react-smart-data-table/dist/react-smart-data-table.css'


const numResults = 100
const emptyTable = <div>There is no data available at the time.</div>


const  Data = ({toggleEditSamples, onRowClick, items, showEditSamples, populateValues, filterValue}) => {
	
	const headers = {
	  tableActions: {
	    text: 'Actions',
	    invisible: false,
	    sortable: false,
	    filterable: false,
	    transform: (value, index, row) => {
	      return (
	      		<button onClick={()=>{populateValues(row); toggleEditSamples(true);}} className="btn btn-outline-secondary">Edit</button>
	      	)
	    }
	  }
	}
	return (
		<SmartDataTable
		emptyTable={emptyTable}
	    data={items}
	    filterValue={filterValue}
	    name="test-table"
	    className="ui compact selectable table"
	    sortable={true}
	    dynamic={true}
	    perPage={numResults}
	    onRowClick={onRowClick}
	    headers={headers}
	  	/>
	)
}

export default Data;
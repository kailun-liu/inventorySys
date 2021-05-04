import React from 'react';


const  PrintLabel = ({onTextBoxChange, printLabelTriggeredByKeyboard, printLabel, toggleCreateSamples, sampleID}) => {

	return (
	   <div className="m-1 p-2 bg-light sticky-top">
			<div className="row">
			   	<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
			     	<input id='sampleID' onKeyPress={(event)=>printLabelTriggeredByKeyboard(event)} onChange={(event)=>onTextBoxChange(event)} type="text" className="form-control" placeholder="sample ID" defaultValue={sampleID}/>
			   	</div>
			   	<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
			   		<button onClick={printLabel} className="btn btn-outline-secondary w-100" type="button" id="TSCTTP345">Print</button>
			   	</div>
			    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
			   		<button onClick={()=>toggleCreateSamples(true)} className="btn btn-outline-secondary w-100" type="button" id="Create_Inventory_Item">Create Inventory Item</button>
				</div>
				<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
			     	<input onChange={(event)=>onTextBoxChange(event)} type="text" className="form-control" placeholder="Search"/>
			   	</div>
			</div>
	   </div>
	   )
}


export default PrintLabel;



	
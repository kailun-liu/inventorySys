import React from 'react';


const EditSamples = ({toggleEditSamples, commodityname, stock, _id, editInventoryItem, createSamplesName, createSamplesStock}) => {
	return (
		<div className="CreateSamples w-100">
			<div className="w-50 border p-5 bg-light">
			  <div className="form-group m-1">
			    <label htmlFor="commodity_name">商品名稱</label>
			    <input onChange={(event)=>createSamplesName(event)} type="text" className="form-control" id="commodity_name" placeholder="輸入商品名稱" defaultValue={commodityname}/>
			  </div>
			  <div className="form-group m-1">
			    <label htmlFor="stock">庫存數量</label>
			    <input  onChange={(event)=>createSamplesStock(event)} type="text" className="form-control" id="stock" placeholder="庫存數量" defaultValue={stock}/>
			  </div>
			  <button onClick={()=>{editInventoryItem(_id, commodityname, stock); toggleEditSamples(false)}}type="submit" className="btn btn-primary m-1">更新</button>
			  <button onClick={()=>toggleEditSamples(false)} type="submit" className="btn btn-secondary m-1">取消</button>
			</div>
		</div>
	)
}



export default EditSamples;
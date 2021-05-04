import React, { Component } from 'react';
import PrintLabel from './components/PrintLabel';
import CreateSamples from './components/CreateSamples';
import EditSamples from './components/EditSamples';
import Data from './components/Data';
import './App.css';


const itemList= [

  {
    _id:0,
    commodityName:"商務襯衫",
    stock:2
  },
  {
    _id:1,
    commodityName:"花式襯衫",
    stock:3
  },

]


class App extends Component {

  constructor(){
    super();
    this.state = {
      _id:0,
      uniseq:2,
      sampleID:'',
      showCreateSamples: false,
      showEditSamples:false,
      commodityname:'',
      stock:0,
      items: itemList,
      filterValue:''
    }
  }

  onTextBoxChange=(event)=>{
    (event.target.id==='sampleID')?
    this.setState({sampleID: event.target.value})
    :
    this.setState({filterValue: event.target.value});
  }

  printLabelTriggeredByKeyboard=(event)=>{
    if (event.key === 'Enter'){
        fetch('http://localhost:3001/', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            sampleID:this.state.sampleID
          })
        })
        .then(resp=>resp.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
  }  

  printLabel=()=>{
    fetch('http://localhost:3001/', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        sampleID:this.state.sampleID
      })
    })
    .then(resp=>resp.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }

  toggleCreateSamples=(value)=>{
    this.setState({showCreateSamples: value});
  }

  toggleEditSamples=(value)=>{
    this.setState({showEditSamples: value});
  }

  onRowClick = (event, { rowData, rowIndex, tableData }) => {
     this.setState({sampleID: rowData._id});
  }

  createSamplesName=(event)=>{
    this.setState({commodityname: event.target.value});
   
  }

  createSamplesStock=(event)=>{
    this.setState({stock: event.target.value});
    
  }

  createSamplesSubmit=()=>{
    const obj = {
      _id: this.state.uniseq,
      commodityName: this.state.commodityname,
      stock: this.state.stock
    }
    itemList.push(obj);
    this.setState((state, props) => ({
      items: itemList,
      uniseq:state.uniseq+1,
      commodityname: '',
      stock:0
    }));
  }

  populateValues=(row)=>{
    this.setState((state, props) => ({
    _id:row._id,
    commodityname: row.commodityName,
    stock:row.stock
  }));
  }

  editInventoryItem=(_id, commodityname, stock)=>{
    let index = 0;
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i]._id===_id) {
          index = i;
      }
    }
    itemList[index] = Object.assign(itemList[index], {commodityName: commodityname, stock:stock})
    this.setState((state, props) => ({
      items: itemList,
    }));
   
  }

  render(){
    
    return (
      <div>
        <PrintLabel onTextBoxChange={this.onTextBoxChange} 
        printLabelTriggeredByKeyboard={this.printLabelTriggeredByKeyboard} 
        printLabel={this.printLabel}
        toggleCreateSamples={this.toggleCreateSamples}
        sampleID={this.state.sampleID}
        />
        {this.state.showCreateSamples? <CreateSamples createSamplesName={this.createSamplesName} 
                                                      createSamplesStock={this.createSamplesStock} 
                                                      createSamplesSubmit={this.createSamplesSubmit} 
                                                      toggleCreateSamples={this.toggleCreateSamples}/>: 
                                                      <div></div>}
        {this.state.showEditSamples? <EditSamples createSamplesName={this.createSamplesName} 
                                                  createSamplesStock={this.createSamplesStock} 
                                                  editInventoryItem={this.editInventoryItem} _id={this.state._id} 
                                                  commodityname={this.state.commodityname} 
                                                  stock={this.state.stock} 
                                                  toggleEditSamples={this.toggleEditSamples}/>: 
                                                  <div></div>}
        
        <Data populateValues={this.populateValues} 
              items={this.state.items} 
              showEditSamples={this.state.showEditSamples} 
              toggleEditSamples={this.toggleEditSamples} 
              onRowClick={this.onRowClick}
              filterValue={this.state.filterValue
        }/>
      </div>
      );
    }
}

export default App;

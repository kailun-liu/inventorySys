(this.webpackJsonpinventorySys=this.webpackJsonpinventorySys||[]).push([[0],{17:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(7),c=n.n(o),i=(n(17),n(8)),l=n(9),r=n(12),m=n(11),d=n(0),u=function(e){var t=e.onTextBoxChange,n=e.printLabelTriggeredByKeyboard,a=e.printLabel,s=e.toggleCreateSamples,o=e.sampleID;return Object(d.jsx)("div",{className:"m-1 p-2 bg-light sticky-top",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-4",children:Object(d.jsx)("input",{onKeyPress:function(e){return n(e)},onChange:function(e){return t(e)},type:"text",className:"form-control",placeholder:"sample ID",defaultValue:o})}),Object(d.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-4",children:Object(d.jsx)("button",{onClick:a,className:"btn btn-outline-secondary w-100",type:"button",id:"TSCTTP345",children:"Print"})}),Object(d.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-4",children:Object(d.jsx)("button",{onClick:function(){return s(!0)},className:"btn btn-outline-secondary w-100",type:"button",id:"Create_Inventory_Item",children:"Create Inventory Item"})})]})})},p=function(e){var t=e.toggleCreateSamples,n=e.createSamplesName,a=e.createSamplesStock,s=e.createSamplesSubmit;return Object(d.jsx)("div",{className:"CreateSamples w-100",children:Object(d.jsxs)("div",{className:"w-50 border p-5 bg-light",children:[Object(d.jsxs)("div",{className:"form-group m-1",children:[Object(d.jsx)("label",{htmlFor:"commodity_name",children:"\u5546\u54c1\u540d\u7a31"}),Object(d.jsx)("input",{onChange:function(e){return n(e)},type:"text",className:"form-control",id:"commodity_name",placeholder:"\u8f38\u5165\u5546\u54c1\u540d\u7a31"})]}),Object(d.jsxs)("div",{className:"form-group m-1",children:[Object(d.jsx)("label",{htmlFor:"stock",children:"\u5eab\u5b58\u6578\u91cf"}),Object(d.jsx)("input",{onChange:function(e){return a(e)},type:"text",className:"form-control",id:"stock",placeholder:"\u5eab\u5b58\u6578\u91cf"})]}),Object(d.jsx)("button",{onClick:function(){s(),t(!1)},type:"submit",className:"btn btn-primary m-1",children:"\u5efa\u7acb"}),Object(d.jsx)("button",{onClick:function(){return t(!1)},type:"submit",className:"btn btn-secondary m-1",children:"\u53d6\u6d88"})]})})},b=function(e){var t=e.toggleEditSamples,n=e.commodityname,a=e.stock,s=e._id,o=e.editInventoryItem,c=e.createSamplesName,i=e.createSamplesStock;return Object(d.jsx)("div",{className:"CreateSamples w-100",children:Object(d.jsxs)("div",{className:"w-50 border p-5 bg-light",children:[Object(d.jsxs)("div",{className:"form-group m-1",children:[Object(d.jsx)("label",{htmlFor:"commodity_name",children:"\u5546\u54c1\u540d\u7a31"}),Object(d.jsx)("input",{onChange:function(e){return c(e)},type:"text",className:"form-control",id:"commodity_name",placeholder:"\u8f38\u5165\u5546\u54c1\u540d\u7a31",defaultValue:n})]}),Object(d.jsxs)("div",{className:"form-group m-1",children:[Object(d.jsx)("label",{htmlFor:"stock",children:"\u5eab\u5b58\u6578\u91cf"}),Object(d.jsx)("input",{onChange:function(e){return i(e)},type:"text",className:"form-control",id:"stock",placeholder:"\u5eab\u5b58\u6578\u91cf",defaultValue:a})]}),Object(d.jsx)("button",{onClick:function(){o(s,n,a),t(!1)},type:"submit",className:"btn btn-primary m-1",children:"\u66f4\u65b0"}),Object(d.jsx)("button",{onClick:function(){return t(!1)},type:"submit",className:"btn btn-secondary m-1",children:"\u53d6\u6d88"})]})})},h=n(10),j=n.n(h),g=(n(27),Object(d.jsx)("div",{children:"There is no data available at the time."})),S=function(e){var t=e.toggleEditSamples,n=e.onRowClick,a=e.items,s=(e.showEditSamples,e.populateValues),o={tableActions:{text:"Actions",invisible:!1,sortable:!1,filterable:!1,transform:function(e,n,a){return Object(d.jsx)("button",{onClick:function(){s(a),t(!0)},className:"btn btn-outline-secondary",children:"Edit"})}}};return Object(d.jsx)(j.a,{emptyTable:g,data:a,name:"test-table",className:"ui compact selectable table",sortable:!0,dynamic:!0,perPage:100,onRowClick:n,headers:o})},y=(n(28),[{_id:0,commodityName:"\u5546\u52d9\u896f\u886b",stock:2},{_id:1,commodityName:"\u82b1\u5f0f\u896f\u886b",stock:3}]),f=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onTextBoxChange=function(t){e.setState({sampleID:t.target.value})},e.printLabelTriggeredByKeyboard=function(t){"Enter"===t.key&&fetch("http://localhost:3001/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sampleID:e.state.sampleID})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},e.printLabel=function(){fetch("http://localhost:3001/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sampleID:e.state.sampleID})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},e.toggleCreateSamples=function(t){e.setState({showCreateSamples:t})},e.toggleEditSamples=function(t){e.setState({showEditSamples:t})},e.onRowClick=function(t,n){var a=n.rowData;n.rowIndex,n.tableData;e.setState({sampleID:a._id})},e.createSamplesName=function(t){e.setState({commodityname:t.target.value})},e.createSamplesStock=function(t){e.setState({stock:t.target.value})},e.createSamplesSubmit=function(){var t={_id:e.state.uniseq,commodityName:e.state.commodityname,stock:e.state.stock};y.push(t),e.setState((function(e,t){return{items:y,uniseq:e.uniseq+1,commodityname:"",stock:0}}))},e.populateValues=function(t){e.setState((function(e,n){return{_id:t._id,commodityname:t.commodityName,stock:t.stock}}))},e.editInventoryItem=function(t,n,a){for(var s=0,o=0;o<y.length;o++)y[o]._id===t&&(s=o);y[s]=Object.assign(y[s],{commodityName:n,stock:a}),e.setState((function(e,t){return{items:y}}))},e.state={_id:0,uniseq:2,sampleID:"",showCreateSamples:!1,showEditSamples:!1,commodityname:"",stock:0,items:y},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{onTextBoxChange:this.onTextBoxChange,printLabelTriggeredByKeyboard:this.printLabelTriggeredByKeyboard,printLabel:this.printLabel,toggleCreateSamples:this.toggleCreateSamples,sampleID:this.state.sampleID}),this.state.showCreateSamples?Object(d.jsx)(p,{createSamplesName:this.createSamplesName,createSamplesStock:this.createSamplesStock,createSamplesSubmit:this.createSamplesSubmit,toggleCreateSamples:this.toggleCreateSamples}):Object(d.jsx)("div",{}),this.state.showEditSamples?Object(d.jsx)(b,{createSamplesName:this.createSamplesName,createSamplesStock:this.createSamplesStock,editInventoryItem:this.editInventoryItem,_id:this.state._id,commodityname:this.state.commodityname,stock:this.state.stock,toggleEditSamples:this.toggleEditSamples}):Object(d.jsx)("div",{}),Object(d.jsx)(S,{populateValues:this.populateValues,items:this.state.items,showEditSamples:this.state.showEditSamples,toggleEditSamples:this.toggleEditSamples,onRowClick:this.onRowClick})]})}}]),n}(a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),x()}},[[29,1,2]]]);
//# sourceMappingURL=main.926a77fe.chunk.js.map
import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header'
import WarehouseList from './Components/WarehouseList/WarehouseList'
// import Warehouse from '';

import WarehouseDetails from './Components/WarehouseDetails/WarehouseDetails';
import InventoryList from './Components/InventoryList/InventoryList';
import WarehousesList from './components/Warehouses/WarehousesList.jsx';
// import Inventory from '';
// import InventoryDetails from '';

import WarehouseEdit from './Components/WarehouseEdit/WarehouseEdit';
import WarehouseAdd from './Components/WarehouseAdd/WarehouseAdd';

class App extends React.Component {
  render() {
  return (
    <>
     <div className="App">
      <BrowserRouter>
        <Header />
        <WarehouseList />
        <InventoryList />
        <Switch>
          <Route exact path = '/warehouse/warehouseEdit' component = {WarehouseEdit}/>
          <Route exact path = '/warehouse/warehouseAdd' component = {WarehouseAdd}/>
          {/* <Redirect exact from = '/' to = '/warehouse'/>
          <Route exact = '/warehouse' component {Warehouse}/> */}
          <Route exact path = '/warehouse/:id' component = {WarehouseDetails}/>
          {/* <Route exact = '/inventory' component = {Inventory}/>
          <Route exact path = '/inventory/:id' component = {InventoryDetails}/> */}
        </Switch>
      </BrowserRouter>
     </div>
    </>
  );
  }
}

export default App;

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Warehouse from './Components/';
import AddInventory from './Components/AddInventory/AddInventory'
// import WarehouseDetails from './Components/WareHouseDetails/WareHouseDetails';
// import Inventory from '';
// import InventoryDetails from '';
// import Header from './Components/Header/Header'

class App extends React.Component {
  render() {
  return (
    <>
    <AddInventory />
      {/* <BrowserRouter>
        <Header />
        <Switch> */}
          {/* <Redirect exact from = '/' to = '/warehouse'/> */}
          {/* <Route exact = '/warehouse' component {Warehouse}/> */}
          {/* <Route exact path = '/warehouse/:id' component = {WarehouseDetails}/>
          <Route exact = '/inventory' component = {Inventory}/>
          <Route exact path = '/inventory/:id' component = {InventoryDetails}/>
        </Switch>
      </BrowserRouter> */}
    </>
  );
  }
}

export default App;

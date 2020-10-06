import React from 'react';
import {Link} from 'react-router-dom';
import '../WarehouseAdd/warehouseAdd.scss';

class WarehouseAdd extends React.Component {
    render() {
        return (
            <>
              <div className = 'header'>
                //put in 'add new warehouse' part
              </div>

                <div className = 'form'>
                  <form onSubmit = {this}>
                    <div className = 'form__details'>
                        <h2 className = 'form__details-heading'>Warehouse Details</h2>

                        <div className = 'form__details-input'>

                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Warehouse Name</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>

                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Street Address</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>


                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>City</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>


                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Country</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>
                        </div>
                    </div>



                     <div className = 'form__details'>
                        <h2 className = 'form__details-heading'>Contact Details</h2>

                        <div className = 'form__details-input'>

                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Contact Name</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>

                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Position</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>


                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Phone Number</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>


                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Email</label>
                            <input
                                type = 'email'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>

                        </div>
                    </div>

                    <div className = 'form__details-button'>
                        <button>Cancel</button>
                        <button>+ Add Warehouse</button>
                    </div>

                  </form>
                </div>
            </>
        )
    }
}

export default WarehouseAdd;
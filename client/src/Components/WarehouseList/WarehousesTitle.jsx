import React, { Component } from 'react';
import IconSort from '../Icons/IconSort';

class WarehousesTitle extends Component {
    render() {
        return (
            <div className="warehouses__title-container wrapper">
                <div className="warehouses__title">
                    warehouse
                    <IconSort />
                </div>

                <div className="warehouses__title warehouses__title-address">
                    address
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    contact name
                    <IconSort />
                </div>

                <div className="warehouses__title warehouses__title-contact">
                    contact information
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    actions
                </div>
            </div>
        )
    }
}

export default WarehousesTitle;
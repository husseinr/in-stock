import React from 'react';
import './addInventory.scss';
import arrowLogo from '../../assets/Icons/arrow_back-24px.svg';


 function AddInventory() {

    return (

        <main>
            <form className="add-inventory">

            <div className="add-inventory__head" >
                <h1 className="add-inventory__head-header"> <img src= {arrowLogo} alt="return-logo"/> Add New Inventory Item</h1>
            </div>


            <div className="add-inventory__details">
                <h2 className="add-inventory__details-header">Item Details</h2>
                
                <div className="add-inventory__details-item">
                    <label className="add-inventory__details-item-label">Item Name</label>
                    <input className="add-inventory__details-item-input" type="text" placeholder="Item Name"/>
                </div>
    
                <div className="add-inventory__details-description">
                    <label className="add-inventory__details-description-label">Description</label>
                    <textarea className="add-inventory__details-description-input" type="text" placeholder="Please enter a brief item description"/>
                </div>

                <div className="add-inventory__details-select">
                    <label className="add-inventory__details-select-label">Category</label>
                    <select className="add-inventory__details-select-field" placeholder="Please select"> Please Select </select>
                </div>



            </div>

            <div className="add-inventory__availability">
                <div className="add-inventory__availability-head">
                    <h2 className="add-inventory__availability-head-header">Item Availability</h2>
                </div>


                <div className="add-inventory__availability-status">

                    <p className="add-inventory__availability-status-header">Status</p>

                    <div className="add-inventory__availability-status-options">
                        <div className="add-inventory__availability-status-options-selectors">
                            <input className="add-inventory__availability-status-options-seletors-field" type="radio"/>
                            <label className="add-inventory__availability-status-options-selectors-label">In Stock</label>
                        </div>

                        <div className="add-inventory__availability-status-options-selectors">
                            <input className="add-inventory__availability-status-options-selectors-field" type="radio"/>
                            <label className="add-inventory__availability-status-options-selectors-label">Out of Stock</label>
                        </div>
                    </div>

                </div>

                <div className="add-inventory__availability-qty">
                    <label className="add-inventory__availability-qty-label">Quantity</label>
                    <input className="add-inventory__availability-qty-input" type="text" placeholder="0"/>
                </div>

        
                <div className="add-inventory__availability-warehouse"> 
                    <label className="add-inventory__availability-warehouse-label">Warehouse</label>
                    <select className="add-inventory__availability-warehouse-select" name="select"/>
                </div>
    

                <div className="add-inventory__availability-buttons">
                    <button className="add-inventory__availability-buttons-cancel"> Cancel </button>
                    <button className="add-inventory__availability-buttons-add"> Add Item </button>
                </div>

            </div>
                
            </form>

        </main>
    )
}

export default AddInventory;

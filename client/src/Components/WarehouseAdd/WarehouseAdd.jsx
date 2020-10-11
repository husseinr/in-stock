import React from 'react';
import {Link} from 'react-router-dom';
import '../WarehouseEdit/warehouseEditAdd.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';
// import ReactFormInputValidation from 'react-form-input-validation';



const initialState ={
  errorName: "",
  errorStreet: "",
  errorCity: "",
  errorCountry: "",
  errorContactName: "",
  errorPosition: "",
  errorPhone: "",
  errorEmail: "",
// },
};
class WarehouseAdd extends React.Component {
  // constructor(){
  // super();
// function WarehouseAdd() {

// this.state = initialState;
state = initialState;

// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
// }

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value});
  console.log(event.target.value)
  // let input = this.state.input;
  // input[event.target.name] = event.target.value;

  // this.setState({
  //   input
  // });
}


validate = () => {
  let errorName = "";
  let errorStreet = "";
  let errorCity = "";
  let errorCountry = "";
  let errorContactName = "";
  let errorPosition = "";
  let errorPhone = "";
  let errorEmail = "";
  let isValid = true;

console.log("this.state.name:" + this.state.name)
console.log(this.state)

  if(!this.state.WarehouseName) {
    isValid = false;
    errorName = "This field is required";
  }

  if(!this.state.Street) {
    errorStreet = "This field is required";
  }

  if(!this.state.City) {
    errorCity = "This field is required";
  }

  if(!this.state.Country) {
    errorCountry = "This field is required";
  }

  if(!this.state.ContactName) {
    errorContactName = "This field is required";
  }

  if(!this.state.Position) {
    errorPosition = "This field is required";
  }

  if(!this.state.Email) {
    errorEmail = "This field is required";}
  // } else if(this.state.Email !== /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) {
  //   errorEmail = "This field is required";
  // }

  if(!this.state.Phone) {
    errorPhone = "This field is required";
  }


  

  // if(!this.state.email.includes('@')) {
  //   emailError = "Email needs to include an @";
  // }

  // if (error) {
  //   this.setState({ error });
  //   return false;
  // }
console.log("errorName:" + errorName)
if (errorName || errorStreet || errorCity || errorCountry || errorContactName || errorPosition || errorPhone || errorEmail ) {
  this.setState({ errorName, errorStreet, errorCity, errorCountry, errorContactName, errorPosition, errorPhone, errorEmail });
  return false;
}
  // });
  return true;
};

handleSubmit = (event) => {
  event.preventDefault();
  const isValid = this.validate();
  if (isValid) {
    // console.log(this.state);
    let addForm = {
      id: event.target.id.value,
      name: event.target.WarehouseName.value,
      street: event.target.Street.value,
      city: event.target.City.value,
      country: event.target.Country.value,
      contact: {
        name: event.target.ContactName.value,
        position: event.target.Position.value,
        phone: event.target.Phone.value,
        email: event.target.Email.value
      }
    }
    axios
    .post('/warehouses', addForm)
  .then (res => {
    this.setState(initialState);
    console.log(res)
    if (res.status===200) {
      alert('Warehouse successfully added')
    } else {
      alert('Error adding warehouse. Please try adding again.')
    }
  })
  
  event.target.reset();

  }
};


// this.form = new ReactFormInputValidation(this, { locale: "en" });
// this.form.useRules({
//   name: "required"
// });

// this.form.onformsubmit = (fields) => {
//   fields.preventDefault();
//   console.log(fields);
//   // axios
//   // .post('/warehouses')
//   // .then (res => {
//   //   if (res.status===200) {
//   //     alert('Warehouse successfully added')
//   //   } else {
//   //     alert('Error adding warehouse. Please try adding again.')
//   //   }
//   // })
//   fields.target.reset();
// }





// let addWarehouse = (event) => {
//   event.preventDefault();

//     let addForm = {
//       id: event.target.id.value,
//       name: event.target.WarehouseName.value,
//       street: event.target.Street.value,
//       city: event.target.City.value,
//       country: event.target.Country.value,
//       contact: {
//         name: event.target.ContactName.value,
//         position: event.target.Position.value,
//         phone: event.target.Phone.value,
//         email: event.target.Email.value
//       }
//     }
  

//     axios
//     .post('/warehouses', addForm)
//     .then (res => {
//       if (res.status===200) {
//         alert('Warehouse successfully added')
//       } else {
//         alert('Error adding warehouse. Please try adding again.')
//       }
//     })
//     event.target.reset();
// }
render() {
return (
  <main>
    <div className = 'wrap'>
    <form 
      className='add'
      // noValidate
      // onSubmit={addWarehouse}>
      onSubmit={this.handleSubmit}>


    <div className = 'add-wrap'>
      <div className = 'add-top'>
        <Link to={{ pathname: '/warehouse/warehouseList'}}>
          <img className= 'add-top__arrow' src={ArrowBack} alt='Return Button'/>
        </Link>
        <h1 className = 'add-top__header'>Add New Warehouse</h1>
      </div>

      <div className = 'add__divider1'></div>

      <div className = 'add-warehouse'>
      
          <div className = 'add-warehouse__details'>
              <h2 className = 'add-warehouse__details-header'>Warehouse Details</h2>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Warehouse Name</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text'
                         name='WarehouseName' 
                         value={this.props.name}
                         onChange={this.handleChange}
                         placeholder='Warehouse Name'
                         />
                        <div className='error'>{this.state.errorName}</div>

                          {/* {this.state.error ? (                         
                           <div className='error'>{this.state.error}</div>
                         ) : null}
                         {this.state.errors.name ? this.state.errors.name : ""} */}
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Street Address</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Street' 
                         value={this.props.street}
                         onChange={this.handleChange}
                         placeholder='Street Address'
                         />
                        <div className='error'>{this.state.errorStreet}</div>

              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>City</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='City' 
                         value={this.props.city}
                         onChange={this.handleChange}
                         placeholder='City'
                         />
                        <div className='error'>{this.state.errorCity}</div>

              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Country</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Country' 
                         value={this.props.country}
                         onChange={this.handleChange}
                         placeholder='Country'
                         />
                        <div className='error'>{this.state.errorCountry}</div>

              </div>
      
          </div>

          <div className = 'add-border-container'>

          <div className = 'add-warehouse__details add-warehouse__details-contact'>
              <h2 className = 'add-warehouse__details-header'>Contact Details</h2>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Contact Name</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='ContactName' 
                         value={this.props.contactname}
                         onChange={this.handleChange}
                         placeholder='Contact Name'
                         />
                        <div className='error'>{this.state.errorContactName}</div>

              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Position</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Position' 
                         value={this.props.position}
                         onChange={this.handleChange}
                         placeholder='Position'
                         />
                        <div className='error'>{this.state.errorPosition}</div>

              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Phone Number</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Phone' 
                         value={this.props.phone}
                         onChange={this.handleChange}
                         placeholder='Phone Number'
                         />
                        <div className='error'>{this.state.errorPhone}</div>

              </div>
              
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Email</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Email' 
                         value={this.props.email}
                         onChange={this.handleChange}
                         placeholder='Email'
                         />
                         <div className='error'>{this.state.errorEmail}</div>

              </div>
          </div>

      </div>
      </div>


        <div className='add-buttons'>
          <button type='submit' className='add-buttons__cancel'>Cancel</button>
          <button type='submit' className='add-buttons__add'>+ Add Warehouse</button>
        </div>
      </div>
    </form>

        <footer className="footer">
          <div className="footer-cont">
            <p className="footer-cont__text">© InStock Inc. All Rights Reserved.</p>
          </div>
        </footer>

    </div>
  </main>
)
}
}
export default WarehouseAdd;
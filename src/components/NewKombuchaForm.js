import React from "react";
import {v4} from 'uuid';

function NewKombuchaForm(props) {

  function handleNewKombuchaFormSubmission(event){
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.alcoholContent.value);
    console.log(event.target.flavor.value);
    console.log(event.target.pints.value);
  }
  return (
    <React.Fragment>
      <h3>Add a New Keg To Stock:</h3>
      <form onSubmit={handleNewKombuchaFormSubmission} >
        <div class="form-group">
          <input 
            type="text"
            name='name'
            placeholder='Kombucha name'
            required/>
          </div>
          <div class="form-group">
            <input
              type="text"
              name='brand'
              placeholder='Brand'
              required />
          </div>
          <div class="form-group">
            <input
              type="number"
              name='price'
              placeholder='Price per keg'
              required />
          </div>
          <div class="form-group">
            <input
              type="number"
              name='alcoholContent'
              placeholder='Alcohol Content'
              required />
            </div>
            <div class="form-group">
              <input
                type="text"
                name='flavor'
                placeholder='Kombucha flavor'
                required />
            </div>
            <div class="form-group">
              <label for="staticPint">Pints: </label>
              <br/>
              <input 
                type="text" 
                readonly 
                id="staticPint" 
                name="pints" 
                value="124"/>
            </div>
            <div class="form-group">
              <button class="btn btn-dark" type='submit'>Add to Stock</button>
            </div>
          </form>
        </React.Fragment>
      );
    }

export default NewKombuchaForm;

  // name: PropTypes.string.required,
  // brand: PropTypes.string.required,
  // price: PropTypes.number.required,
  // alcholContent: PropTypes.number.required,
  // flavor: PropTypes.string.required,
  // pints: PropTypes.number.required



//124 pints in a keg
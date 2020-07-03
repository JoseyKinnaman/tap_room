import React from "react";

function NewKombuchaForm(props) {
  return (
    <React.Fragment>
      <h3>Add a New Keg To Stock:</h3>
        <form >
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
                  placeholder='Kombucha name'
                  required />
              </div>
              <div class="form-group">
                <label for="staticPint">Pints: </label>
                <br/>
                <input 
                  type="number" 
                  readonly 
                  id="staticPint" 
                  name="pints" 
                  value="124"/>
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
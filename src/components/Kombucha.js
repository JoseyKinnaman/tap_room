import React from "react";
import PropTypes from "prop-types";

function Kombucha(){
  return(
    <React.Fragment>
    </React.Fragment>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string.required,
  brand: PropTypes.string.required,
  price: PropTypes.number.required,
  alcholContent: PropTypes.number.required,
  flavor: PropTypes.string.required,
  pints: PropTypes.number.required

}

//124 pints in a keg
export default Kombucha;
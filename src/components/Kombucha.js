import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  return(
    <React.Fragment>
      <h2>Current Tap List:</h2>
      <h3>{props.name}</h3>
      <p>From: {props.brand}</p>
      <p>flavor: {props.flavor}</p>
      <p>$ {props.price}</p>
      <p>ACV: {props.alcoholContent}%</p>
      <div className="pints">
        <p>Pints remaning/keg: <b>{props.pints}</b></p>
      </div>
    </React.Fragment>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  pints: PropTypes.number.isRequired
}

//124 pints in a keg
export default Kombucha;
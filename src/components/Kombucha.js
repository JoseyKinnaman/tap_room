import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  const kombuchaStyles ={
    backgroundColor: '#E1D5E7',
    border: 'solid 1pt #9673A6',
    textAlign: "center",
    borderRadius: "8px",
    margin: "20px"
  }
  return(
    <React.Fragment>
      <div style={kombuchaStyles}>
        <h3>{props.name}</h3>
        <p>From: {props.brand}</p>
        <p>flavor: {props.flavor}</p>
        <p>$ {props.price}</p>
        <p>ACV: {props.alcoholContent}%</p>
        <div className="pints">
          <p>Pints remaning/keg: <b>{props.pints}</b></p>
        </div>
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
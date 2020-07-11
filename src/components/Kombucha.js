import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  const kombuchaStyles ={
    backgroundColor: '#E1D5E7',
    border: 'solid 1pt #9673A6',
    textAlign: "center",
    borderRadius: "8px",
    margin: "20px",
    padding: "5px"
  }
  return(
    <React.Fragment>
      <div style={kombuchaStyles}>
        <h3>{props.name}</h3>
        <h5>From: {props.brand}</h5>
        <h5>Flavor: {props.flavor}</h5>
        <p>Pints remaning/keg: <b>{props.pints}</b></p>
        <div class="form-group">
          <button onClick={() => props.whenKombuchaClicked(props.id)}  class="btn btn-info">View Details</button>
        </div>
        <button class="btn btn-dark" onClick ={ ()=> props.whenKombuchaPurchased(props.id)}>Buy</button>
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
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKombuchaClicked: PropTypes.func,
  whenKombuchaPurchased: PropTypes.func,
};

export default Kombucha;
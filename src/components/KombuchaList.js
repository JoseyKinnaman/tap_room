import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props){
  const kombuchaListStyles = {
    backgroundColor: '#F5F5F5',
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px"
  }
  return(
    <React.Fragment>
      <div style={kombuchaListStyles}>
        <h2>Current Tap List:</h2>
        {props.kombuchaList.map((kombucha, index) => <Kombucha name={kombucha.name}
                brand={kombucha.brand}
                price={kombucha.price}
                alcoholContent={kombucha.alcoholContent}
                flavor={kombucha.flavor}
                pints={kombucha.pints}
                key={index}/>
            )}
      </div>
    </React.Fragment>  
  );
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.array
};

export default KombuchaList;



  // name: PropTypes.string.required,
  // brand: PropTypes.string.required,
  // price: PropTypes.number.required,
  // alcholContent: PropTypes.number.required,
  // flavor: PropTypes.string.required,
  // pints: PropTypes.number.required
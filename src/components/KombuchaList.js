import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props){
  return(
    <React.Fragment>
      <div className="">
        {props.kombuchaList.map((kombucha, index)
          => <Kombucha name={kombucha.name}
                brand={kombucha.brand}
                price={kombucha.alcoholContent}
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
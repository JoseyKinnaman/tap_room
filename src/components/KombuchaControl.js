import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }

  render(){
    let currentlyVisibleState = null;
    let addKombuchaButton = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKombuchaForm />
    } else {
      currentlyVisibleState = <KombuchaList />
      addKombuchaButton = <button class="btn btn-dark" onClick={this.handleClick}>Add Kombucha</button> // new code

    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addKombuchaButton}
      </React.Fragment>
    );
  }

}

export default KombuchaControl;
import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKombuchaList: []
    };
  }

  handleClick = () => {
    this.setState( prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKombuchaForm />
      buttonText = "Return to Tap List"
    } else {
      currentlyVisibleState = <KombuchaList kombuchaList={this.state.masterKombuchaList}/>
      buttonText =  "Add Kombucha"

    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button class="btn btn-dark" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default KombuchaControl;
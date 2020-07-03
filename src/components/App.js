import React from 'react';
import Header from './Header';
import KombuchaControl from './KombuchaControl';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <React.Fragment>
     <div className="container">
      <Header/>
      <KombuchaControl/>
      </div>
   </React.Fragment>
  );
}

export default App;

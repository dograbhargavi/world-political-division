import React from "react";
import { Link } from "react-router-dom";

import "./App.css";


const App = () => {
  //
  return (
    <>
    <div className={'App-header'}></div>
    
    <div className={'App'}>
      <Link
        to={{
          pathname: `/continents-info`,
        }}
      >
        <button>Continents</button>
      </Link>
      <Link
        to={{
          pathname: `/languages-info`,
        }}
      >
        <button>Languages</button>
      </Link>
    </div>
    </>
  );
};
export default App;


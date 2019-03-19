import React, { Component } from "react";
import "./App.css";
import Contador from "./Component/contador";
import Menus from "./Component/menu";
import Mlateral from './Component/menulateral';
import Personas from './Component/persona';

class App extends Component {
  render() {
    return (
      <div>
      
       <Menus></Menus>
       <Personas></Personas>
                  
      </div>
    );
  }
}

export default App;

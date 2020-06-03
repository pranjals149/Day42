import React from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponents";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color = 'primary'>
        <div className = 'container'>
          <NavbarBrand href = '/'>Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;

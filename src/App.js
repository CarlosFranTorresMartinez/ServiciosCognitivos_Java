import React from "react";
import Translate from './components/traductor/Translate';
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Traductor VG</Navbar.Brand>
        </Navbar>
        <br/>
        <Translate></Translate>
    </div>
  );
}

export default App;

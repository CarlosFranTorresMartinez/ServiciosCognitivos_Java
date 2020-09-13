import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Index from "./traductor/index";

class Init extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Traductor VG</Navbar.Brand>
        </Navbar>
        <br/>
        <Index></Index>
      </div>
    );
  }
}

export default Init;

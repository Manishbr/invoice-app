import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
    
  return (
    <Navbar  expand="lg" style={{color:"GrayText", backgroundColor:"#C0C0C0"}}>
      <Navbar.Brand style={{paddingLeft:"1000px"}} >Ascend Cargo Systems</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
      </Navbar.Collapse>
    </Navbar>
  );
}

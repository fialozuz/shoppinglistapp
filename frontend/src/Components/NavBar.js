import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Icon from "@mdi/react";
import { mdiPlusCircle, mdiViewHeadline } from "@mdi/js";
import ListGroup from 'react-bootstrap/ListGroup';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../ComponentsSmall/logo.svg';


function NavBar() {

  //Offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <div style={{ position: "relative", zIndex: "10" }}></div>
      <Navbar bg="light" variant="light">
        <Container>
          <Icon path={mdiViewHeadline} size={3} onClick={handleShow}/>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  New List
                  <ListGroup>
                    <ListGroup.Item action variant="warning" onClick={console.log('ahoj')} >
                      <Icon path={mdiPlusCircle} size={1} style={{marginLeft: "47%",}}/>
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup style={{marginTop: "25px"}}>
                    <ListGroup.Item action onClick={console.log('1')}>
                      This one is a button1
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={console.log('2')}>
                      This one is a button2
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={console.log('3')}>
                      This one is a button3
                    </ListGroup.Item>
                  </ListGroup>
                </Offcanvas.Body>
              </Offcanvas>
          <Navbar.Brand href="/" possition="absolute">
            <img
              src={logo}
              width="500"
              height="200"
              alt="GoShop logo"
            />
          </Navbar.Brand>
          <Image src='https://tse1.mm.bing.net/th?q=blue+color' width="60" height="60" roundedCircle />



  {/*         <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/list">list</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
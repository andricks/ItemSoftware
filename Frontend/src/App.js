import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">CRUD App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/create">
                  <Nav.Link>Create Item</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4">
          <Routes>
            <Route path="/create" element={<CreateItem />} />
            <Route path="/" element={<ItemList />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;

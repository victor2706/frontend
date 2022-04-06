import React from 'react'
import { Card, Carousel, Container, Nav, Navbar, Row, link} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/objeto">Navbar</Navbar.Brand>
          <Nav className="me-auto">

            <Link className="nav-link" to="/carros">Carros</Link>
            <Link className="nav-link" to="/array">Array</Link>
            <Link className="nav-link" to="/objeto">Objeto</Link>
            <Link className="nav-link" to="/contador">Contador</Link>
            <Link className="nav-link" to="/Filmespopulares">Filmes Populares</Link>
          
          </Nav>
          </Container>
        </Navbar>

        <br />


    </div>
  )
}

export default Menu
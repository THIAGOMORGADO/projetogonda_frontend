
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {
  Container,

  Nav,
  Navbar,
  NavDropdown,
  
} from 'react-bootstrap/'
import * as Icons from 'react-bootstrap-icons'

import { FaRegPlusSquare } from 'react-icons/fa'

import logo from '../../assets/logo_white.png'

export function NavBar() {
  const navigate = useNavigate()
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState('')

  const handleHome = () => {
    navigate('/')
  }
  const handleBooks = () => {
    navigate('/livros')
  }
  const handleAbout = () => {
    navigate('/about')
  }
  const handleCorreraEgonda = () => {
    navigate('/correragonda')
  }
  const handleContacts = () => {
    navigate('/contact')
  }
  const handleAddBookPage = () => {
    navigate('/addbook')
  }
  const handleLogin = () => {
    navigate('/autenticacao')
  }

  async function handleLogoutSubmit() {
    try {
      setError('')
      await logout()
    } catch (error) {
      setError(`Falha no Logout`)
    }
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="fntrbt">
          <Navbar.Brand onClick={handleHome} className="linhaheader">
            <img
              src={logo}
              alt="logo-renato-gonda"
              width="100"
              onClick={handleHome}
              style={{ cursor: 'pointer' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_bar_items">
              {currentUser && (
                <>
                  <Nav.Link onClick={handleHome} className="navItem">
                    Home
                  </Nav.Link>
                  <Nav.Link className="navItem itemmobile"> | </Nav.Link>
                  <Nav.Link onClick={handleAbout} className="navItem">
                    Renato Gonda
                  </Nav.Link>
                  <Nav.Link className="navItem itemmobile"> | </Nav.Link>
                  <Nav.Link onClick={handleCorreraEgonda} className="navItem">
                    Correra&Gonda
                  </Nav.Link>
                  <Nav.Link className="navItem itemmobile"> | </Nav.Link>
                  <Nav.Link onClick={handleBooks} className="navItem">
                    Livros
                  </Nav.Link>
                  <Nav.Link className="navItem itemmobile"> | </Nav.Link>
                  <Nav.Link onClick={handleContacts} className="navItem">
                    Contato
                  </Nav.Link>
                  <Nav.Link className="navItem itemmobile"> | </Nav.Link>

                  {/* <Nav.Link onClick={handleAddBookPage}><strong><FaRegPlusSquare /> Livro</strong></Nav.Link> */}
                  {/* <Nav.Link  className="navItem itemmobile"> | </Nav.Link> */}
                </>
              )}
              <br />
              <NavDropdown
                className="bg-drop"
                title=""
                id="navbarScrollingDropdown"
              >
                {!currentUser ? (
                  <NavDropdown.Item
                    onClick={handleLogin}
                    bg="dark"
                    className="Items"
                  >
                    <Icons.PersonCircle className="icons" /> Login
                  </NavDropdown.Item>
                ) : (
                  <>
                    <NavDropdown.Item
                      onClick={() => handleLogoutSubmit()}
                      bg="dark"
                      className="Items"
                    >
                      <Icons.PersonCircle className="icons" /> Logout
                      <p>{error}</p>
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      onClick={handleAddBookPage}
                      bg="dark"
                      className="Items"
                    >
                      <FaRegPlusSquare /> Livro
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

import React from 'react'
import { Container, Row, Col }from 'react-bootstrap';
import { NavBar } from '../../components/Navbar'

export function CorreraGondaPage() {
  return (
    <>
      <NavBar />         
        <Container className="home-page">
          <Row>
            <Col sm={12}>
              <h1  className="text-center">CORRERA & GONDA</h1>
            </Col>        
          </Row>
        </Container>
    </>  
  )
}
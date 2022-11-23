import React from 'react'
import { Container, Row, Col }from 'react-bootstrap';
import { NavBar } from '../../components/Navbar'

export function ErrorPage() {
  return (
    <>
        <NavBar />         
        <Container className="add-book-page">
          <Row>
            <Col sm={12}>
              <h1>ERRO Página não Encontrada! 404!</h1>
            </Col>        
          </Row>
        </Container>
    </>  
  )
}
import React from 'react'
import { Container, Row, Col }from 'react-bootstrap';
import { NavBar } from '../../components/Navbar'

import { Contato } from '../../components/Contato'

export function ContactPage() {
  return (
    <>
      <NavBar />         
        <Container className="add-book-page">
          <Row>
            <Col sm={12}>
              <Contato/>
            </Col>        
          </Row>
        </Container>
    </>  
  )
}
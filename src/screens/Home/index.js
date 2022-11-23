import React, {} from 'react';
import { useAuth } from "../../context/AuthContext";

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { useNavigate } from 'react-router-dom';
import { Container, Row, Col }from 'react-bootstrap';
import { NavBar } from '../../components/Navbar';

export function HomePage() {

  const navigate = useNavigate();
  const {currentUser} = useAuth();

  const handleBooksPage = () => {
    navigate('/livros')
  }

  return(
      <>
        <NavBar />         
        <Container className="home-page">

          <Row>
            <Col sm={12}>
              <h1 style={{textAlign: 'center'}}>SITE EM DESENVOLVIMENTO</h1>
            </Col>        
          </Row>

          {currentUser && 
            <Row>
              <Col sm={12}>
                <button className="btn btn-success" onClick={handleBooksPage}> Página de Livros </button>
              </Col>
            </Row>
          }
          
        </Container>
      </>  
  );
}

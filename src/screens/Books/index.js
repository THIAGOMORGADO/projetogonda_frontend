import React, { useState, useEffect } from 'react'
import { Container, Row, Col }from 'react-bootstrap';

import api from '../../services/api';

import { NavBar } from '../../components/Navbar';
import { Card } from '../../components/Card';

export function BooksPage() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    let isSubscribed = true
    async function getBooksSql() {
      const response = await api.get('/livros');
      if (isSubscribed) {
        setBooks(response.data);
        setLoading(false);
      }
    };
    getBooksSql();
    return () => isSubscribed = false
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if(books.length > 0) {
      setVisible(books.length)
    }
    return () => {}
  // eslint-disable-next-line
  }, [loading]);

  // function handleVisible(){
  //   setVisible((prevValue) => prevValue + 3);
  // }
  // function handleVisibleMenos(){
  //   setVisible((prevValue) => prevValue - 1);
  // }

  books.sort(function (a, b) {
    return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
  });

  return (
    <>
      <NavBar />           
      <Container className="home-page">
        <Row>
          {/* 
          <Col sm={6}>
            <button className="btn btn-success" onClick={handleVisibleMenos}> - LIVROS</button>
          </Col>
          <Col sm={6}>
          <button className="btn btn-success" onClick={handleVisible}> + LIVROS</button>
          </Col>
          */}            
        </Row>
        <Row>
          <Col className="contentBooks">
            {loading ? <div className="loading"><h2>Carregando...</h2></div> :
            books?.slice(0, visible).map((book, index) => {
              return <Card key={index} product={book}/>
            })}
          </Col>
        </Row>
      </Container>    
    </>
  );
}
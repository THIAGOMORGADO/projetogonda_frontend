import React, { useState, useRef } from 'react'
import { Container, Row, Col }from 'react-bootstrap'
import { useAuth } from "../../context/AuthContext";
import { NavBar } from '../../components/Navbar'

import { Form as Formulario } from '@unform/web';
import Input from '../../components/Form/input';
import * as Yup from 'yup';

import api from '../../services/api';

export function AddBookPage() {
  const { currentUser } = useAuth();

  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [msgsucess, setMsgSucess] = useState(false);

  async function handleSubmit(data, {reset}) {

    try{
      const schema = Yup.object().shape({
      titleparams: Yup.string()
      .required("* obrigatório"),
      title: Yup.string()
      .required("* obrigatório"),
      historico: Yup.string()
      .required("* obrigatório"),
      release: Yup.string()
      .required("* obrigatório"),
      pretexto: Yup.string()
      .required("* obrigatório"),
      preco_venda: Yup.string()
      .required("* obrigatório"),
      author: Yup.string()
      .required("* obrigatório"),
      capa_img: Yup.string()
      .required("* obrigatório"),
    });

    await schema.validate(data, {
      abortEarly:false,
    })

    const { 
      titleparams,
      title,
      historico,
      release,
      pretexto,
      preco_venda,
      author,
      capa_img} = data;

      setMsgSucess('')
      setLoading(true)
  
      await api.post(`/livros/`, {
        titleparams,
        title,
        historico,
        release,
        pretexto,
        preco_venda,
        author,
        capa_img
      });

      formRef.current.setErrors({});

      setMsgSucess('Livro Cadastrado com Sucesso!')
      setLoading(false);
    
      setTimeout(() => {
        setMsgSucess('')
      },5000)
  
    reset();

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const errorMessages = {};
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })
        formRef.current.setErrors(errorMessages);
      }
    }
 
  }

  // const openInNewTab = url => {
  //   // 👇️ setting target to _blank with window.open
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // };


  return (
    <>
      <NavBar />     

      <Container className="home-page">
         
          <Row>
            <Col sm={12}>
             {loading? <p>Aguarde...</p> : <h1>Cadastrar um Livro</h1>}
              Olá {currentUser?.email}
             <hr/>
            </Col>        
          </Row>

        {currentUser &&          
          <Formulario onSubmit={handleSubmit} ref={formRef}>
              <Row>
                <Col sm={6}>
                  <Input label="Título: (ex: titulodolivro)*" name="titleparams"/> 
                </Col>
                <Col sm={6}>
                  <Input label="Título Normal" name="title"/> 
                </Col>              
              </Row> 
                <Row>
                <Col sm={4}>
                    <Input label="Histórico" name="historico"/> 
                  </Col>
                  <Col sm={4}>
                    <Input label="Release" name="release"/>
                  </Col>
                  <Col sm={4}>
                    <Input label="PréTexto" name="pretexto"/> 
                  </Col>            
                </Row> 
                <Row>
                  <Col sm={4}>
                    <Input label="Preço de Venda" name="preco_venda"/>
                  </Col>
                  <Col sm={4}>
                    <Input label="Autor" name="author"/> 
                  </Col>
                  <Col sm={4}>
                    <Input label="URL DA CAPA em JPG" name="capa_img"/> 
                  </Col>
                </Row> 
                <Row>
                  <Col sm={12}>
                  {msgsucess && <p>{msgsucess}</p>}
                  </Col>        
                </Row>
                <Row>
                  <Col sm={12}>
                    <button type="submit" className="btn btn-success" style={{width:'100%', fontWeight:'bold', marginTop:20}}>
                      Cadastrar Livro
                    </button>
                  </Col>
                </Row>
          </Formulario>}
        </Container>
    </>  
  )
}
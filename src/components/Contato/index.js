import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Modal }from 'react-bootstrap';
import { FaRegCheckCircle, FaRegClock } from 'react-icons/fa';

import { useAuth } from "../../context/AuthContext";
import * as Yup from 'yup';
import { Form } from '@unform/web';
import Input from '../Form/input';

import api from '../../services/api';

export function Contato() {

  const formRef = useRef(null);
  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(true)
  const [contatos, setContatos] = useState([])
  const [ modalShow, setModalShow ] = useState(false);

  useEffect(() => {
    let isSubscribed = true
    async function getContatosSQL() {
      const response = await api.get(`/contatos/`);
      if (isSubscribed) {
        setContatos(response.data);
        setLoading(false);
      }        
    };
    getContatosSQL();    
    return () => isSubscribed = false
  }, [loading]);

  async function handleUpdateStatusTrue(id) {
    setLoading(true);
    await api.put(`/contatos/${id}`,{
        status: "Respondido"
      });
    setLoading(false);
  }
  async function handleUpdateStatusFalse(id) {
    setLoading(true);
    await api.put(`/contatos/${id}`,{
        status: "Pendente"
      });
    setLoading(false);
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4 className="font-face-bs">Sucesso! Em breve retornaremos.</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>   
          <h4 className="font-face-bs msgsucess">Sua mensagem foi enviada com sucesso! </h4>
        </Modal.Body>
      </Modal>
    );
  }

  async function handleSubmit(data, {reset}) {
    try{
      const schema = Yup.object().shape({
      name: Yup.string()
      .required("* obrigatório"),
      email: Yup.string().email()
      .required("* obrigatório"),
      whatsapp: Yup.string()
      .required("* obrigatório"),
      message: Yup.string()
      .required("* obrigatório"),
    });

    await schema.validate(data, {
      abortEarly:false,
    })

    const { name, email, whatsapp, message } = data;

    await api.post(`/contatos`, {
      name, 
      email, 
      whatsapp, 
      message,
      status: "Pendente"
     });
     
      setModalShow(true);
      formRef.current.setErrors({});

      setTimeout(() => {
        setModalShow(false);        
      }, 4000);

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

  return(
    <div className="home-page">
      <MyVerticallyCenteredModal show={modalShow}onHide={() => setModalShow(false)} />

      <h1 className="text-center">Fale Conosco, hoje é um ótimo dia.</h1>
      <p className="text-center">Lista de pessoas que completaram o formulário a cima</p>

      <Form onSubmit={handleSubmit} className="form" ref={formRef}>
          <Input label="Nome" name="name"/>
          <Input label="E-mail" name="email"/>
          <Input label="WhatsApp" name="whatsapp"/>
          <Input label="Mensagem" name="message"/>
        <button type="submit" className="btn btn-login" style={{width: '100%', color:'#fff', fontWeight:'bold', marginTop:20}}>Enviar</button>
      </Form>

      <hr/>

      {currentUser &&
        <>
        <h2 className="text-center">Lista de Contatos</h2>
        <p className="text-center">Lista de pessoas que completaram o formulário a cima</p>
        <hr/>
        {loading ? <div className="textloading font-face-bs">Aguarde...</div> :

        contatos?.map((conatos, i) => (
          <div key={conatos.id} className="font-rbt">
            <Row className="list-orders">
              <Col md={2}>
                {conatos.name}
              </Col>  
              <Col md={2}>
                {conatos.email}
              </Col>   
              <Col md={2}>
                {conatos.whatsapp}
              </Col>  
              <Col md={4}>
                {conatos.message}
              </Col>  
              <Col md={2}>
                {conatos.status === "Respondido" ?
                <div style={{color:'#008000', cursor: 'pointer'}} 
                onClick={() => handleUpdateStatusFalse(conatos.id)}>
                  <FaRegCheckCircle/> {conatos.status}</div> 
                : 
                <div style={{color:'#f90', cursor: 'pointer'}} 
                onClick={() => handleUpdateStatusTrue(conatos.id)}>
                  <FaRegClock/> {conatos.status}
                </div>
                }
              </Col>
            </Row>
          </div>
        ))}
        </>
      }
    </div>
  )
}
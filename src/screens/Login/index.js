import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Container, Row, Col } from 'react-bootstrap/';

import { Form } from '@unform/web';
import Input from '../../components/Form/input';

import { useAuth } from "../../context/AuthContext";
import { NavBar } from '../../components/Navbar';

export function Autenticacao(){
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  async function handleLoginSubmit() {
    try{
      setError('')
      setLoading(true)
      await login(user, password)
      setUser("");
      setPassword("")
      setLoading(false)
    } catch {
      setError(`Complete os campos corretamente!`)
      setLoading(false)
    }   
  }

  useEffect(() => {
    let t = setTimeout(() => {
      if(currentUser){
        navigate("/livros");
      }
    }, 100);
    return () => clearTimeout(t);
    // eslint-disable-next-line
  }, [currentUser]);

  return(
    <>
    <NavBar />     
    <Container className="formlogin font-face-bs">
      <Row style={{padding:50, textAlign: 'center', borderRadius:10}}>  
        <Col sm={4}></Col>

        <Col sm={4}>
          <Col sm={12} style={{padding:20, textAlign: 'center'}}>
            Faça seu Login
          </Col>
          <Form onSubmit={handleLoginSubmit} >   
            <Input
              type="email"
              name="email"
              placeholder="digite seu email"
              onChange={event => setUser(event.target.value)}
              value={user}
            />            
            <Input
              name="password"
              type="password"
              placeholder="digite sua senha"
              onChange={event => setPassword(event.target.value)}
              value={password}
            />
            <button disabled={loading} type="submit" className="btn btn-login" style={{width:'100%'}}>ENTRAR</button>
          </Form>
          <p>{error}</p>           
          </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  </>   
  );
}

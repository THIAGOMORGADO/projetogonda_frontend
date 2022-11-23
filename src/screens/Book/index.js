import React, {useState, useEffect, useRef} from 'react'
import { Container, Row, Col }from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom'

import { useAuth } from "../../context/AuthContext";

import { Form as Formulario } from '@unform/web';
import Input from '../../components/Form/input';

import api from '../../services/api';

import { NavBar } from '../../components/Navbar';
import { MiniCard } from '../../components/MiniCard';

export function BookPage() {
  // eslint-disable-next-line 
  const {id} = useParams();
  const { currentUser } = useAuth();
  const formRef = useRef(null);
  const location = useLocation();
  const [codigo, setCodigo] = useState('');
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msgsucess, setMsgSucess] = useState(false);


  useEffect(() => {
    let isSubscribed = true
    async function getBooksSql() {
      const response = await api.get(`/livros/`);
      if (isSubscribed) {
        setBooks(response.data);
        setLoading(false);
      }        
    };
    getBooksSql();    
    return () => isSubscribed = false
  }, []);


  useEffect(() => {
    setCodigo(location?.state?.code);   
  }, [location]);

  useEffect(() => {
    let isSubscribed = true
    async function getBookSql() {
      const response = await api.get(`/livros/${codigo}`);
      if (isSubscribed) {
        setBook(response.data);
        setLoading(false);
      }        
    };
    getBookSql();    
    return () => isSubscribed = false
  }, [codigo, loading]);

  setTimeout(() => {
    formRef.current?.setData(book[0]);
  }, 500)


  async function handleSubmit(data, {reset}) {

    setMsgSucess('')
    setLoading(true)

    const { 
      titleparams,
      title,
      historico,
      release,
      pretexto,
      preco_venda,
      author,
      capa_img} = data;

    await api.put(`/livros/${codigo}`, {
      titleparams,
      title,
      historico,
      release,
      pretexto,
      preco_venda,
      author,
      capa_img  
    }).then((response) => {
      if(response.status === 200){
        setMsgSucess('Livro Atualizado com Sucesso!')
        setLoading(false);

        setTimeout(() => {
          setMsgSucess('')
        },5000)

      } else return response.json();
    }).catch(err => {
      setMsgSucess(err);
      setLoading(false);
    });

    //reset();
  }

  function price(x) {
    return Number.parseFloat(x).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(",", ".");
  }


  return (
    <>
    <NavBar />        
        <Container className="book-page">
          <Row>
            <Col sm={9}>
            {loading? <h1>Aguarde...</h1> : book?.map((book, index) => (
            <Row  key={index}>
              <Col sm={6} className="book-img">
              <img src={book?.capa_img} alt={book?.title} /> 
              </Col>
              <Col sm={6}>     
                <div className="box-book">
                  {/* <p>cod: {book?.codigo}</p> */}
                  <h2 className="title-book-page">{book?.title}</h2>
                  <p><strong>Release:</strong> {book?.release}</p>
                  <p style={{fontWeight:'bold'}}>{price(book?.preco_venda)}</p>
                  <div className="btn-acao">                    
                    <button className="btn btn-success"> <strong></strong>COMPRAR</button>
                    <button className="btn btn-danger"> <strong>PDF</strong></button>
                  </div>      
                </div>  
              </Col>  
              <hr/>
              <Col sm={12}>
              <p><strong>Histórico: </strong> {book?.historico}</p>  
              </Col>
              <hr/>
              <Col sm={12}>
              <p><strong>préTEXTOgonda: </strong> {book?.pretexto}</p>  
              </Col>
            </Row>))} 
            </Col>            
            <Col sm={3}>
              {loading ? <h2>Carregando...</h2> :
              books?.slice(0, 12).map((book, index) => {
                return <MiniCard key={index} product={book}/>
              })}
            </Col>
          </Row>

          <hr/>

          {currentUser &&
            <>
            <h3 style={{marginTop:30, textAlign: 'center'}}>AQUI VOCÊ ALTERA O LIVRO!</h3>
              <hr/>
                <Formulario onSubmit={handleSubmit} ref={formRef} initialData={book}>
                  <Row>
                    <Col sm={6}>
                      <Input label="Título: (Ex.: titulodolivro)" name="titleparams"/> 
                    </Col>
                    <Col sm={6}>
                      <Input label="Título Normal" name="title"/> 
                    </Col>               
                  </Row> 
                  <hr/>
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
                  <hr/>
                  <Row>
                    <Col sm={2}>
                      <Input label="Preço de Venda" name="preco_venda"/>
                    </Col>
                    <Col sm={3}>
                      <Input label="Autor" name="author"/> 
                    </Col>
                    <Col sm={7}>
                      <Input label="URL DA CAPA em JPG" name="capa_img"/> 
                    </Col>
                  </Row> 
                  <Row>
                    <Col sm={12} style={{textAlign: 'center', padding:10,}} className="font-face-bs">
                      {msgsucess}
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <button type="submit" className="btn btn-success" style={{width:'100%', fontWeight:'bold'}}>
                        Atualizar Livro
                      </button>
                    </Col>
                  </Row>
                </Formulario>
              <hr/>                
            </> 
          }
        

        </Container>
    </> 
  )
};
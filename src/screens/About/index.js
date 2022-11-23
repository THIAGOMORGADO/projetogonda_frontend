import React from 'react'
import { Container, Row, Col }from 'react-bootstrap';
import { NavBar } from '../../components/Navbar';

//import logo from '../../assets/logo.jpg'
import logo from '../../assets/logo.png'
import autor from '../../assets/autor.png'

export function AboutPage() {
  return (
    <>
    <NavBar />         
      <Container className="quem-somos">
        
        <Row>
          <Col sm={4} className="fntrbt nome">
            <h1>RENATO<br/>GONDA</h1>
          </Col> 
          <Col sm={4} className='logo'>
            <img src={logo} alt="logo-renato-gonda"/>  
          </Col>                   
          <Col sm={4} className='foto_autor'>
            <img src={autor} alt="logo"/>
          </Col>
        </Row>

        <Row>
        <div className="info" style={{marginTop:30}}>
          <div className="paragrafo">
            <p><strong>Renato Gonda</strong>é poeta, artista plástico e <i>designer visual</i> e de objetos, possuindo licenciatura em artes (educação
              artística) pela Faculdade Marcelo Tupinambá e Faculdade Bellas Artes, 1988; bacharelado e licenciatura em letras pela
              Universidade de São Paulo, 1991; doutorado em semiótica e linguística geral pela FFLCH e ECA / USP, 1998 – “Das
              traduções: Reflexões sobre os processos de criação e tradução intersemiótica na criação da obra OROBORO”; pós-doutorado focado em "poesia visual circular" pela ECA / USP, 2015 – <i>“CIRCULARopoemaCIRCULAR”</i>; e iniciando pós-doutorado em políticas públicas com o tema "CREART – Centro de referência e apoio ao artista e artesão", pelo
              núcleo Diversitas, na FFLCH / USP. O tema OROBORO – a serpente mítica que come a própria cauda – é um dos
              principais motes de sua produção artística.
            </p>
          </div>
          <div className="paragrafo">
            <p>Possui cinco livros editados em poesia, com duas premiações pela APCA – Associação Paulista de Críticos de
              Artes, além de antologias e vários prefácios. São eles: “Primeira ronda à margem da Serpente” & “Canto ao Canto”
              dois títulos em um só volume, Massao Ohno Editor, prefácio de Alfredo Bosi e prêmio Revelação de Autor pela APCA,
              em 1987; “TRÍLOGO – Apoteose de uma herança em Pai. Mãe: Filho...”, edição independente, prefácio de Péricles Prade,
              1988 – texto vencedor do II Festival Sérgio Milliet de Poesia Falada, na Biblioteca Mário de Andrade; “Fugitivo dos
              Homens”, posfácio de Milton de Godoy Campos, Massao Ohno Editor, 1990; e “AD NADA – 101 haikais ou quase”,
              posfácio de Olga Savary, Escrituras Editora, 1994 – prêmio de melhor livro de poesia pela APCA. Em 2022 lançará cerca
              de 11 livros inéditos (produzidos a partir doa anos 90), além de reedições.
            </p>
          </div>
          <div className="paragrafo">
            <p>Foi secretário de turismo e cultura, e presidente dos conselhos municipais de cultura e de turismo, no Embu das
              Artes, além de conselheiro em outras áreas. Participa ativamente de várias entidades do terceiro setor, tendo presidindo a
              Associação Cultural EMBUscadasARTES de 2013 a 2021, onde ocupa atualmente o cargo de Editor de livos, já tendo
              produzido dezenas de títulos de autores de Embu das Artes e região. Está presidente da recém-fundada ‘EMBUorg” –
              Aliança de Entidades Artísticas, Culturais, Ambientais e Turísticas de Embu das Artes. Concebeu, lecionou e coordenou o
              curso de extensão HISTÓRIA E POÉTICA DAS ARTES na UNIFESP – Universidade Federal de São Paulo e na UAPI –
              Universidade Aberta à Pessoa Idosa: programa ligado à Secretaria Municipal de Direitos Humanos e Cidadania de São
              Paulo.
            </p>
          </div>
          <div className="paragrafo">
            <p>Foi professor na graduação e pós-graduação na Universidade ANHANGUERA, participando de 3 NDEs – núcleos
              docentes estruturantes (artes, letras e pedagogia), tendo se afastado após os términos dos cursos na instituição, em 2019
              (permanecendo à disposição para aulas na pós-graduação). Artista multimídia, trabalha com poesia visual e computacional
              – e, em parceria com Gerson Correra, produz esculturas luminares e obras de design desde meados dos anos 1980
              (assinando coletivamente Correra & Gonda), tendo realizado dezenas de exposições individuais e coletivas.
            </p>
          </div>
          <div className="paragrafo">
            <p>Ministrou duas oficinas de Poesia Visual na Casa das Rosas em São Paulo, onde fez a exposição expOROBORO –
              com Gerson Correra. Expôs seus trabalhos de poesia visual também no Centro Cultural São Paulo e no MUBE – Museu
              Brasileiro da Escultura.
            </p>
          </div>
          <div className="paragrafo">
            <p>Críticos e estudiosos como Alfredo Bosi, Olga Savary, Péricles Prade, Álvaro Alves de Faria, Cláudio Willer,
              Radha Abramo, Enock Sacramento, Jacob Klintowitz, Lula Freire, Lênia Márcia Mongelli, Lorena Vita Ferreira, Fernando
              Paixão, Milton de Godoy Campos, Péricles Prade, Jorge Medauar, Luiz Tatit, Marcos Ferreira-Santos, Renata Barcellos,
              Tchello dBarros – entre outros, já escreveram sobre seu trabalho.
            </p>
          </div>
          <br/>
          <div className="paragrafo">
            <p>Expõe sua obra artística na Feira de Embu das Artes.</p>
          </div>
        </div>
        </Row>
    </Container>
  </>
  )
}

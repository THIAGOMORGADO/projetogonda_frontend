import React, {useState} from 'react';
import { EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
//import { ContentState, convertToRaw } from 'draft-js';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import { useNavigate } from 'react-router-dom';
import { Container, Row, Col }from 'react-bootstrap';
import { NavBar } from '../../components/Navbar';

import './style.css'

export function EditorPage() {
  const navigate = useNavigate();

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const  [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }

  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

  console.log(convertedContent)

  //https://blog.logrocket.com/building-rich-text-editors-in-react-using-draft-js-and-react-draft-wysiwyg/

  const handleBooksPage = () => {
    navigate('/livros')
  }

  return(
      <>
        <NavBar />         
        <Container className="editor-page">
          <Row>
            <Col sm={12}>
              <button className="btn btn-success"
              onClick={handleBooksPage}> 
              Go Books Page 
              </button>
            </Col>        
          </Row>

          <Row>
            <Col sm={12}>
              <hr/>
              <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </Col>        
          </Row>

          <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>

        </Container>
      </>  
  );
}

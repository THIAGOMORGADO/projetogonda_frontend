import React from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.css'

export function MiniCard(props) {
  const navigate = useNavigate();
  // eslint-disable-next-line 
  const {title, titleparams, codigo, capa_img} = props.product

  function handleGoToBookWithCodigo(tituloparams, codigo) {
    navigate(`/livros/${tituloparams}`, {
      state: {
        code: codigo
      }
    })
  }

  return (

    <div className="minicard-book"  onClick={() => handleGoToBookWithCodigo(titleparams, codigo)}>

      <div className="ladoa">
        <img src={capa_img} alt={title}/>
      </div>

      <div className="ladob">
        <div className="title-minicard-book fntrbt">{title}</div>
        <div className="title-minicard-book fntrbt"><span></span></div>
      </div>

    </div>
  )
  
}

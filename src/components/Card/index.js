import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Card(props) {

  const navigate = useNavigate();
  // eslint-disable-next-line 
  const {title, titleparams, codigo, historico, preco_venda, capa_img} = props.product

  function handleGoToBookWithCodigo(tituloparams, codigo) {
    navigate(`/livros/${tituloparams}`, {
      state: {
        code: codigo
      }
    })
  }

  function price(x) {
    return Number.parseFloat(x).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(",", ".");
  }

  return (
    <div className="book">

      <p className="title-book fntrbt">{title}</p>

      <div className="box-img-book">
        <img className="img-book" src={capa_img} alt={title} onClick={() => handleGoToBookWithCodigo(titleparams, codigo)}/>
      </div>
    
      {/* <p className="historico">{historico}</p> */}
      
      <div className="price-book">
        <p>{price(preco_venda)}</p>
      </div>

      <div className="btn-acao-card">
        
        <button className="btn btn-success" style={{backgroundColor:'#666', borderColor:'#666'}}
         onClick={() => handleGoToBookWithCodigo(titleparams, codigo)}>
          <strong>
            PDF
          </strong> 
        </button>

        <button className="btn btn-success"
        onClick={() => handleGoToBookWithCodigo(titleparams, codigo)}> 
          <strong>
            COMPRAR
          </strong> 
        </button>

      </div>
    </div>
  )
  
}

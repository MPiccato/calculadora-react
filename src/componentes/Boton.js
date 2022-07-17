import React from 'react'
import '../hojas-de-estilo/Boton.css'

const Boton = (props) => {
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }


  return (
    <div
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
    >
      {props.children}
    </div>
  )
}

export default Boton;

import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
//import Portada from './imagenes/portada.jpeg';
function App() {
  return (
    <div className="App">
      {/* <div className='App-logo'>
        <img className='logo' src={Portada} alt="Portada MPiccato" />
      </div> */}
      <div className='contenedor-calculadora'>
        <Pantalla />
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>

        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>.</Boton>
          <Boton>0</Boton>
          <Boton>=</Boton>
          <Boton>/</Boton>

        </div>
        <div className='fila'>
          <BotonClear>Limpiar</BotonClear>
        </div>

      </div>
  
    
    </div>
  );
}

export default App;

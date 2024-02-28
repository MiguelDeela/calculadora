import { useState } from 'react'
import './App.css'
import { Pantalla } from './Pantalla'
import './Pantalla.css'
import { Boton } from './boton'
import { BotonClear } from './BotonClear'
import { evaluate } from 'mathjs'

function App() {

  const [num, setNum] = useState('')

  const camNum = (val) =>{
    setNum(num + val)
  }

  //const [clear, setClear] = useState('')

  const clear = ()=>{
    setNum('')
  }

  const resultado = () => {
    setNum(evaluate(num))
  }

  return (
    <section>

      <h1>Calculadora</h1>
      <Pantalla input={num} />

      <section className='calculadora-btn-fila'>
        <Boton manejarclick={camNum}>1</Boton>
        <Boton manejarclick={camNum}>2</Boton>
        <Boton manejarclick={camNum}>3</Boton>
        <Boton manejarclick={camNum}>+</Boton>
      </section>

      <section className='calculadora-btn-fila'>
        <Boton manejarclick={camNum}>4</Boton>
        <Boton manejarclick={camNum}>5</Boton>
        <Boton manejarclick={camNum}>6</Boton>
        <Boton manejarclick={camNum}>-</Boton>
      </section>

      <section className='calculadora-btn-fila'>
        <Boton manejarclick={camNum}>7</Boton>
        <Boton manejarclick={camNum}>8</Boton>
        <Boton manejarclick={camNum}>9</Boton>
        <Boton manejarclick={camNum}>*</Boton>
      </section>

      <section className='calculadora-btn-fila'>
        <Boton manejarclick={resultado}>=</Boton>
        <Boton manejarclick={camNum}>0</Boton>
        <Boton manejarclick={camNum}>.</Boton>
        <Boton manejarclick={camNum}>/</Boton>
      </section>

      <BotonClear clear={clear}>Clear</BotonClear>
      
    </section>
  )
}

export default App

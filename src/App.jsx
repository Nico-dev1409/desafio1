import React from 'react'
import Componente from './Componente'

function App() {
  const title = "Gestor de tareas";
  const message = "Gestioná tus tareas diarias, de forma sencilla y rápida.";
  const message2 = "Lista de tareas pendientes";
  return (
    <>
    <Componente title={title} message={message} message2={message2} />
    </>
  )
}

export default App

import { useState } from 'react'
import ToDoCard from './componets/ToDoCard'
import ModalDescricao from './componets/Modais/ModalDescricao'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <h1>To Do List</h1>
      <ToDoCard />
    </>
  )
}

export default App

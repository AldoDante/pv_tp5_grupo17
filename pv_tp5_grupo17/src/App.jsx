import { useState } from 'react'
import {useAlumnos} from './hooks/useAlumnos';
import NavBar from './components/NavBar';


function App() {
  const {
    alumnos,
    editingAlumno,
    addAlumno,
    updateAlumno,
    deleteAlumno,
    startEditAlumno
  } = useAlumnos();

  return (
    <>
      <NavBar />
    </>
  )
}

export default App

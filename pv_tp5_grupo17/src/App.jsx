import { useState } from 'react'
import {useAlumnos} from './hooks/useAlumnos';

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
    </>
  )
}

export default App

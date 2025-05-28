import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import {useAlumnos} from './hooks/useAlumnos';
import NavBar from './components/NavBar';
import ListaAlumnos from './pages/ListaAlumnos';

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
      <Routes>
        <Route path="/alumnos" element={<ListaAlumnos
              alumnos={alumnos}
              deleteAlumno={deleteAlumno}
              startEditAlumno={startEditAlumno}
            />} />
      </Routes>
    </>
  )
}

export default App

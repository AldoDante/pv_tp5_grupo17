import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import {useAlumnos} from './hooks/useAlumnos';
import NavBar from './components/NavBar';
import ListaAlumnos from './pages/ListaAlumnos';
import FormAlumno from './pages/FormAlumno';
import Home from './pages/home';

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
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<ListaAlumnos
              alumnos={alumnos}
              deleteAlumno={deleteAlumno}
              startEditAlumno={startEditAlumno}
            />} />
        <Route path="/alumnos/:id/editar" element={<FormAlumno
          addAlumno={addAlumno}
          editingAlumno={editingAlumno}
          updateAlumno={updateAlumno}
          alumnos={alumnos}
        />} />
         <Route path="/alumnos/nuevo" element={<FormAlumno
          addAlumno={addAlumno}
          editingAlumno={editingAlumno}
          updateAlumno={updateAlumno}
          alumnos={alumnos}
        />} />
      </Routes>
    </>
  )
}

export default App

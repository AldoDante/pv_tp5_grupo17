import { useState, useCallback, useEffect } from 'react';

export function useAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [editingAlumno, setEditingAlumno] = useState(null);

  useEffect(() => {
    console.log('Alumnos actualizados:', alumnos);
  }, [alumnos]);

  const addAlumno = useCallback((alumno) => {
    setAlumnos(prev => [...prev, alumno]);
  }, []);

  const updateAlumno = useCallback((updatedAlumno) => {
    setAlumnos(prev =>
      prev.map(p => (p.id === updatedAlumno.id ? updatedAlumno : p))
    );
    setEditingAlumno(null);
  }, []);

  const deleteAlumno = useCallback((id) => {
    setAlumnos(prev => prev.filter(p => p.id !== id));
  }, []);

  const startEditAlumno = useCallback((alumno) => {
    setEditingAlumno(alumno);
  }, []);

  return {
    alumnos,
    editingAlumno,
    addAlumno,
    updateAlumno,
    deleteAlumno,
    startEditAlumno
  };
}
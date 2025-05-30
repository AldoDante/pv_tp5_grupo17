# 🎓 Sistema de Gestión de Alumnos - React + Vite

---
## 👥 Integrantes del Grupo 17

👤 Gonzalo Ricardo Taritolay - @GonzaTaritolay
👤 Aldo Dante Antivilo       - @AldoDante
👤 Julio Nahuel Heredia      - @Jnh1212

## 📋 Descripción

Aplicación web para gestionar alumnos con funcionalidades **CRUD** (Crear, Leer, Actualizar, Eliminar) usando React y Vite.

Permite listar alumnos, ver detalles, agregar nuevos, editar y eliminar con validaciones robustas en el formulario.

> Creado por el **Grupo 17 - Programación Visual**.

---

## 🗂 Estructura del Proyecto

/src
/components
├─ AlumnoCard.jsx # Tarjeta para mostrar info breve de cada alumno
└─ NavBar.jsx # Barra de navegación principal
/pages
├─ Home.jsx # Página de bienvenida
├─ ListaAlumnos.jsx # Listado completo de alumnos
├─ FormAlumno.jsx # Formulario para crear/editar alumnos
├─ DetalleAlumno.jsx # Vista con detalles completos del alumno
└─ Acerca.jsx # Página "Acerca de" la aplicación
/hooks
└─ useAlumnos.js # Hook para manejo de estado y lógica CRUD
App.jsx # Componente raíz con configuración de rutas


---

## 🚀 Funcionalidades principales

- **Listado de Alumnos:** Visualización con tarjetas que muestran datos básicos y acciones.
- **Detalles del Alumno:** Página con información detallada.
- **Alta y Edición:** Formulario con validaciones para agregar o modificar alumnos.
- **Validaciones:** Campos obligatorios y reglas específicas para ID, email, teléfono, etc.
- **Eliminación:** Opción para borrar alumnos con confirmación.
- **Navegación:** Menú para acceder a las diferentes secciones fácilmente.

---

## ⚠️ Validaciones en el Formulario

| Campo    | Reglas                                                                          |
| -------- | ------------------------------------------------------------------------------ |
| **ID**       | Obligatorio, entero positivo, único, sin ceros iniciales, max 10 caracteres     |
| **Nombre**   | Obligatorio, max 30 caracteres                                                  |
| **Apellido** | Obligatorio, max 30 caracteres                                                  |
| **Curso**    | Obligatorio, max 20 caracteres                                                  |
| **Email**    | Obligatorio, formato válido, único, max 50 caracteres                           |
| **Domicilio**| Obligatorio, max 100 caracteres                                                 |
| **Teléfono** | Obligatorio, numérico, único, max 15 caracteres                                |

---

## 🛠 Tecnologías usadas

- React 18
- React Router DOM
- React Bootstrap
- Vite
- JavaScript ES6+

---

## 📦 Cómo ejecutar el proyecto

1. Clonar repositorio

```bash
git clone <URL-del-repositorio>
cd <nombre-del-proyecto>

2. Instalar dependencias:

npm install

3. Iniciar servidor de desarrollo:

npm run dev
Abrir en el navegador http://localhost:5173 (por defecto)

---

## 📝 Notas adicionales

- El hook `useAlumnos` maneja toda la lógica y estado de alumnos.
- Los datos se mantienen en memoria (sin backend ni base de datos).
- Uso de React Bootstrap para diseño responsive.
- Proyecto preparado para futuras mejoras y persistencia.


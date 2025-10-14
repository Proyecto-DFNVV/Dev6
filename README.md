# Dev6 – Inmobiliaria Saul Hnos 🏠  
Proyecto Integrador I – Gestión de alquileres

---

## 📌 Descripción del Proyecto
Saul Hnos es una inmobiliaria de Córdoba, ubicada en el barrio General Paz, que actualmente difunde sus propiedades en Instagram.  
Con el crecimiento de consultas surge la necesidad de un **sitio/sistema web propio** para centralizar la información, organizar visitas y gestionar clientes y contratos.

---

## 🎯 Objetivo / Visión
La propuesta es desarrollar una **aplicación web responsive**, que funcione como el primer paso en la presencia online de Saul Hnos y permita:  
- Centralizar la información de las propiedades disponibles.  
- Facilitar la reserva de turnos/visitas de manera sencilla.  
- Gestionar clientes, contratos y pagos.  
- Potenciar la imagen profesional de la inmobiliaria.  

### Áreas principales
- **Portal público**: catálogo de propiedades con filtros, fotos, descripciones, agenda de visitas y formulario de contacto.  
- **Área de clientes registrados**: acceso a datos personales, estado de operaciones y módulo básico de pagos.

---

## ⚙️ Funcionalidades

### MVP (Sprints 0–1)
- Listado de propiedades con filtros y fotos.  
- Detalle de propiedad con descripción.  
- Formulario de contacto y solicitud de visita.  
- Menú de navegación y diseño responsive.

### Evolución (Sprints 2+)
- Gestión de clientes y contratos de alquiler.  
- Registro de pagos y vencimientos.  
- Panel administrativo con CRUD.  
- Optimización de recursos (imágenes WEBP, tiempos de carga).

### Futuro (Sprints 3+)
- Integración con WhatsApp o chat en línea.  
- Sistema de calendario avanzado.  
- Posicionamiento SEO básico.

---

## 👥 Usuarios Potenciales
- **Administrador**: gestiona propiedades, clientes, contratos y pagos.  
- **Cliente registrado**: consulta contratos y pagos.  
- **Visitante**: explora el catálogo, agenda visitas y completa formularios de contacto.

---

## 👨‍💻 Equipo

| Nombre                       | Rol / Email / GitHub |
|-------------------------------|--------------------|
| Moya Verónica                 | Scrum Master – vero.moya@gmail.com – [GitHub](https://github.com/Veromoya95) |
| Corvalán Alejandro            | Product Owner – alejandromcorva@gmail.com – [GitHub](https://github.com/Corval-LC) |
| Guillén Jonathan              | QA – jonathan.guillen@mi.unc.edu.ar – [GitHub](https://github.com/JG-UNC) |
| Ruzzi Valeria                 | Dev – valeriaruzzi@gmail.com – [GitHub](https://github.com/valer05) |
| Salvo Daniela                 | Dev – daniela7salvo@gmail.com – [GitHub](https://github.com/DanipSal) |
| Velasco Gonzalo               | Tester – gonzalo.velasco@mi.unc.edu.ar – [GitHub](https://github.com/g0niii) |

---

## 📋 Product Backlog inicial
- Diseño y estructura: wireframes, secciones Home/Propiedades/Contacto/FAQ, estilo visual.  
- Desarrollo: maquetado front en HTML/CSS; backend en Python simple con endpoints mínimos y MySQL.  
- Optimización UX: responsive, pruebas multi-dispositivo, optimización de imágenes y videos.  
- Gestión de datos: CRUD de propiedades, clientes, contratos y pagos.  
- Integraciones futuras: calendario, WhatsApp, SEO.

---

## 🧱 Tecnologías
- **Frontend:** HTML5, CSS3, JavaScript, React  
- **Backend:** Python, Flask, MySQL  
- **Control de versiones:** Git y GitHub  
- **Diseño:** Figma / Canva  
- **Gestión del proyecto:** Trello / Scrum

---

## 🎲 Modelado de datos / Contratos
- Contratos de alquiler: fecha_fin = fecha planificada de finalización.  
- finalizado = contrato llega a fecha_fin.  
- rescindido = contrato termina antes de fecha_fin; se registrará fecha_rescision (Sprint 2).

---

## 📚 Reconocimiento de Wikis

Se utilizará el espacio **Wiki del repositorio** para documentar:  
- Historias de usuario y criterios de aceptación.  
- Configuración técnica (instalación, despliegue).  
- Guías para nuevos integrantes del equipo.  

El equipo se compromete a mantener las wikis actualizadas al cierre de cada sprint.

---

## 📄 Licencia
Este proyecto se desarrolla con fines educativos para la materia **Proyecto Integrador I (UTN / [tu institución])**.  
El código puede reutilizarse con fines académicos mencionando la fuente.

---

## 📂 Documentación
- [IEEE830 – Especificación de Requisitos](https://docs.google.com/document/d/1f-O2QS8keezM_-WDX3REgbiHtAoItkY3R9hBNXKISWU/edit?pli=1&tab=t.0#heading=h.8a5eks7m3bjn)  
- [Diagrama entidad relación - Diagrama de Clases UML](./docs/DER%20y%20Diagrama%20de%20clase.pdf)  
- [Schema SQL](docs/schema.sql)
- [Diagrama Modelo Relacional](https://github.com/Proyecto-DFNVV/Dev6/blob/main/docs/Diagrama%20Modelo%20Relacional.png)
- [Historias de usuario](https://docs.google.com/spreadsheets/d/1Kp1DKsy8N1ubMoLdLvDve8G5GEpLTiSvWCnp-JkGc40/edit?pli=1&gid=1099442861#gid=1099442861)
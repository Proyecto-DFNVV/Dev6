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
- GitHub, HTML/CSS, Python, MySQL 8.  
- Diseño responsive y compatibilidad multi-navegador.

---

## 🎲 Modelado de datos / Contratos
- Contratos de alquiler: fecha_fin = fecha planificada de finalización.  
- finalizado = contrato llega a fecha_fin.  
- rescindido = contrato termina antes de fecha_fin; se registrará fecha_rescision (Sprint 2).

---

## 📂 Documentación
- [IEEE830 – Especificación de Requisitos](./docs/IEEE830.pdf)  
- [Diagrama entidad relación - Diagrama de Clases UML](./docs/DER.pdf)  
- [Schema SQL](docs/schema.sql)  
- [Diagrama Modelo Relacional](docs/Diagrama%20Modelo%20Relacional.png)  
- [Historias de usuario](https://github.com/Proyecto-DFNVV/Dev6/blob/Develop/docs/Historias%20Usuario%20dev6.xlsx)

# Dev6 – Inmobiliaria Saul Hnos 🏠
Proyecto Integrador I – Gestión de alquileres

---

## 📌 Descripción
Saul Hnos es una inmobiliaria de Córdoba que actualmente difunde sus propiedades en Instagram.  
Con el crecimiento de consultas surge la necesidad de un **sistema web propio** para centralizar la información, organizar visitas y gestionar clientes y contratos.

---

## 🎯 Objetivo
Construir una **aplicación web responsive** con dos áreas principales:
- **Portal público**: catálogo de propiedades con filtros, fotos y descripciones, agenda de visitas y formulario de contacto.
- **Área de clientes registrados**: acceso a datos personales, estado de operaciones y módulo básico de pagos.

El sistema será escalable para futuras integraciones (WhatsApp, SEO, reportes).

---

## 👥 Usuarios
- **Administrador**: gestiona propiedades, clientes, contratos y pagos.  
- **Cliente registrado**: consulta contratos y pagos.  
- **Visitante**: explora el catálogo, agenda visitas y completa formularios de contacto.  

---

## ⚙️ Funcionalidades
### MVP (Sprints 0–1)
- Listado de propiedades con filtros.
- Detalle de propiedad con fotos y descripción.
- Formulario de contacto.
- Solicitud/agenda de visita vía formulario.
- Menú de navegación a secciones.
- Diseño responsive.

### Evolución (Sprints 2+)
- Gestión de clientes y contratos de alquiler.
- Registro de pagos y vencimientos.
- Panel administrativo con CRUD.
- Optimización de recursos (imágenes WEBP, tiempos de carga).
- Compatibilidad multi-navegador (Chrome, Firefox, Safari).

### Futuro (Sprints 3+)
- Integración con WhatsApp o chat en línea.
- Sistema de calendario avanzado.
- Posicionamiento SEO básico.

---

## 📋 Product Backlog inicial
- **Diseño y estructura:** wireframes, secciones Home/Propiedades/Contacto/FAQ, estilo visual.
- **Desarrollo:** maquetado front en HTML/CSS; backend en **Python** (endpoints mínimos) con **MySQL**.
- **Optimización UX:** responsive, diseño simple, pruebas multi-dispositivo.
- **Gestión de datos:** CRUD de propiedades, clientes, contratos y pagos (siguientes sprints).
- **Integraciones futuras:** calendario, WhatsApp, SEO.

---

## 👨‍💻 Equipo
| Rol             | Nombre(s) |
|-----------------|-----------|
| Scrum Master    | Moya Verónica |
| Developers      | Ruzzi Valeria, Corvalán Alejandro, Salvo Daniela, Velasco Gonzalo, Guillén Jonathan |

<<<<<<< HEAD
| Rol           | Nombre(s)            |
|---------------|----------------------|
| **Scrum Master** | Verónica             |
| **Desarrolladores (Dev)** | Valeria, Daniela, Alejandro |
=======
---
## 🧱 Tecnologías y fundamentación
- Gestión: **GitHub** (Issues, PRs, Wiki, Projects).
- Base de datos: **MySQL 8 (InnoDB, utf8mb4)**.
- Front: **HTML/CSS** (responsive, sin framework en S0).
- Back: **Python** simple (endpoints mínimos para guardar contactos).
>>>>>>> origin/main

---

## 📂 Documentación
- [IEEE830 – Especificación de Requisitos](./docs/IEEE830.pdf)  
- [Diagrama entidad relación - Diagrama de Clases UML](./docs/DER.pdf)  


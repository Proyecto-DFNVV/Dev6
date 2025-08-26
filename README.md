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

👨‍💻 ## Integrantes Dev6

<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Email</th>
      <th>Rol</th>
      <th>GitHub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Corvalán Alejandro</td>
      <td>alejandromcorva@gmail.com</td>
      <td><img src="https://img.shields.io/badge/Product%20Owner-4B0082?style=for-the-badge" alt="Product Owner" /></td>
      <td><a href="https://github.com/Corval-LC">Corval-LC</a></td>
    </tr>
    <tr>
      <td>Guillén Jonathan</td>
      <td>jonathan.guillen@mi.unc.edu.ar</td>
      <td><img src="https://img.shields.io/badge/QA-DC143C?style=for-the-badge" alt="QA" /></td>
      <td><a href="https://github.com/JG-UNC">JG-UNC</a></td>
    </tr>
    <tr>
      <td>Moya Verónica</td>
      <td>vero.moya@gmail.com</td>
      <td><img src="https://img.shields.io/badge/Scrum%20master-2E8B57?style=for-the-badge" alt="Scrum master" /></td>
      <td><a href="https://github.com/Veromoya95">Veromoya95</a></td>
    </tr>
    <tr>
      <td>Ruzzi Valeria</td>
      <td>valeriaruzzi@gmail.com</td>
      <td><img src="https://img.shields.io/badge/Dev-DAA520?style=for-the-badge" alt="Dev" /></td>
      <td><a href="https://github.com/valer05">valer05</a></td>
    </tr>
    <tr>
      <td>Salvo Daniela</td>
      <td>daniela7salvo@gmail.com</td>
      <td><img src="https://img.shields.io/badge/Dev-DAA520?style=for-the-badge" alt="Dev" /></td>
      <td><a href="https://github.com/DanipSal">DanipSal</a></td>
    </tr>
    <tr>
      <td>Velasco Gonzalo</td>
      <td>gonzalo.velasco@mi.unc.edu.ar</td>
      <td><img src="https://img.shields.io/badge/Tester-4682B4?style=for-the-badge" alt="Tester" /></td>
      <td><a href="https://github.com/g0niii">g0niii</a></td>
    </tr>
  </tbody>
</table>




## 👨‍💻 Equipo
| Rol             | Nombre(s) |
|-----------------|-----------|
| Scrum Master    | Moya Verónica |
| Developers      | Ruzzi Valeria, Corvalán Alejandro, Salvo Daniela, Velasco Gonzalo, Guillén Jonathan |

---
## 🧱 Tecnologías y fundamentación
- Gestión: **GitHub** (Issues, PRs, Wiki, Projects).
- Base de datos: **MySQL 8 (InnoDB, utf8mb4)**.
- Front: **HTML/CSS** (responsive, sin framework en S0).
- Back: **Python** simple (endpoints mínimos para guardar contactos).

---

## 📂 Documentación
- [IEEE830 – Especificación de Requisitos](./docs/IEEE830.pdf)  
- [Diagrama entidad relación - Diagrama de Clases UML](./docs/DER.pdf)  


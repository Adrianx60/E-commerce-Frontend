# 📄 Documento de Entrega – E-commerce MVP

## 1. Brief del Proyecto
- **Nombre:** E-commerce MVP  
- **Objetivo:** Construir un frontend en React que consuma el backend desarrollado previamente, integrando login, perfil de usuario, búsqueda de productos, detalle, checkout con MercadoPago y confirmación de pago.  
- **Tecnologías utilizadas:**  
  - Frontend: React + Vite + React Router  
  - Backend: Node.js + Express  
  - Base de datos: PostgreSQL (ejemplo)  
  - Integraciones: Algolia (búsqueda), Resend (emails), MercadoPago (pagos)  
- **Arquitectura:**  
  - Backend: MVC (controllers, routes, services).  
  - Frontend: modular (pages, components, ui, hooks, lib).  

---

## 2. URL de la Web en Producción
- **Frontend (Vercel):** https://tu-proyecto.vercel.app  
- **Backend (Render/Railway):** https://tu-api.onrender.com  

*(Reemplazar con tus URLs reales antes de entregar)*

---

## 3. Bitácora Scrum

### 📌 Planning
- Definimos backlog inicial: login, perfil, búsqueda, detalle, checkout, thanks, logout.  
- Estimamos tiempos y asignamos responsables.  

### 📌 Dailies
- **Día 1:** Configuración de entorno en VSCode, creación de repositorios.  
- **Día 2:** Implementación de rutas básicas en frontend.  
- **Día 3:** Conexión con backend (`/auth`, `/products`).  
- **Día 4:** Integración con MercadoPago y pruebas con tarjetas de test.  
- **Día 5:** Ajustes de UI según Figma y deploy en Vercel.  

### 📌 Retro
- **Lo que salió bien:** integración rápida con API, estructura clara en frontend.  
- **Lo que mejoraríamos:** más tests automatizados, documentación más detallada.  
- **Próximos pasos:** agregar carrito, mejorar estilos, optimizar performance.  

---

## 4. Checklist de Páginas
- `/` → Home ✅  
- `/signin` → Login ✅  
- `/profile` → Perfil ✅  
- `/search?q={query}` → Búsqueda ✅  
- `/item/{itemId}` → Detalle ✅  
- `/checkout/{itemId}` → Pago ✅  
- `/thanks` → Confirmación ✅  
- `/logout` → Redirección ✅  

---

## 5. Notas Finales
- Usar **cuenta de prueba de MercadoPago** con tarjetas de test.  
- Documento debe ser **público** y accesible en incógnito.  
- El front es un **MVP**: simple pero funcional, con todo el flujo completo.  

# Shopping App

Aplicación web de **shopping / e‑commerce** construida con **React 19 + Vite + TypeScript**, usando **TailwindCSS** para estilos, **React Router** para navegación y **TanStack React Query** para el manejo de datos remotos.

El proyecto utiliza **json-server** como backend mock para simular una API REST durante el desarrollo.

---

## 🚀 Instalación

Clona el repositorio e instala las dependencias:

```bash
pnpm install
# o
npm install
```

---

## ▶️ Scripts disponibles

### Levantar el frontend

```bash
pnpm dev
# o
npm run dev
```

La app estará disponible en:

```
http://localhost:5173
```

---

### Levantar el backend mock (json-server)

Este proyecto **requiere** que json-server esté corriendo para funcionar correctamente.

```bash
pnpm run server
# o
npm run server
```

Esto levanta un servidor REST usando el archivo:

```
src/db.json
```

Disponible en:

```
http://localhost:3001
```

Ejemplo de endpoints:

```txt
GET    /products
GET    /products/:id
POST   /cart
```

> ⚠️ Asegúrate de que el puerto **3001** esté libre antes de iniciar el servidor.

---

## 🔄 Flujo de datos

* **React Query** se encarga de:

  * Fetching de productos
  * Cacheo
  * Estados de loading / error
* **Zustand** maneja estado local global como:

  * Carrito de compras
* **Context API** se usa solo para estado transversal no relacionado con datos remotos:

  * Tema (dark / light)
  * Notificaciones

---


# eQuantum - Sitio corporativo con Next.js

Migración del sitio institucional de eQuantum a una base moderna con:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Componentes reutilizables

## Estructura principal

```bash
/app
/components
/lib
/public/imagenes
```

> `public/imagenes` queda preparado para que copies tus assets finales sin incluir binarios pesados en el PR.

## Ejecutar localmente

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir en navegador:
   ```
   http://localhost:3000
   ```

## Build de producción

```bash
npm run build
npm run start
```

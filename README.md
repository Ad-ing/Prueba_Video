# Hola mundo — banner en movimiento

Miniproyecto React + Vite con un banner que se desplaza en bucle infinito.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).

## Personalizar

En `src/App.jsx`:

```jsx
<Marquee text="Hola mundo" speed={18} />            // speed = segundos por vuelta
<Marquee text="Hola mundo" reverse variant="outline" />
```


# Mi Portafolio

Este es mi portafolio personal, desarrollado para mostrar mis habilidades y proyectos. Continuo trabajando en él, por lo tanto es actualizado constantemente

## Descripción

Este proyecto es una aplicación web de una sola página (SPA) construida con tecnologías modernas de desarrollo web. El propósito principal es servir como una tarjeta de presentación digital, donde puedo mostrar mi experiencia, habilidades y los proyectos en los que he trabajado.

## Características

- **Moderno y Responsivo:** Diseño limpio y adaptable a diferentes tamaños de pantalla.
- **Multilenguaje:** Soporte para múltiples idiomas (inglés y español) gracias a `i18next`.
- **Componentes Reutilizables:** Construido con una arquitectura basada en componentes para facilitar el mantenimiento y la escalabilidad.

## Tecnologías Utilizadas

- **[React](https://react.dev/):** Biblioteca de JavaScript para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/):** Herramienta de compilación rápida para el desarrollo web moderno.
- **[TypeScript](https://www.typescriptlang.org/):** Superset de JavaScript que añade tipado estático.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de CSS para un diseño rápido y personalizado.
- **[i18next](https://www.i18next.com/):** Framework de internacionalización para JavaScript.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `src/components`: Contiene los componentes reutilizables de la aplicación.
- `src/assets`: Almacena los recursos estáticos como imágenes y logos.
- `src/context`: Gestiona el estado global de la aplicación, como el tema (claro/oscuro).
- `src/hooks`: Contiene los hooks personalizados de React.
- `src/locales`: Almacena los archivos de traducción para el soporte multi-idioma.
- `public/`: Contiene los archivos estáticos que no son procesados por Vite.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo.
Abre [http://localhost:5173](http://localhost:5173) para verla en tu navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.

### `npm run lint`

Ejecuta el linter para encontrar y corregir problemas en el código.

### `npm run preview`

Ejecuta la aplicación en modo de producción localmente.

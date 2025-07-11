# Firebase Studio

# Menú Digital con IA para Orquidiario

Este proyecto es una aplicación web moderna para un menú digital, diseñada para ser interactiva y fácil de administrar. Incluye funcionalidades avanzadas como sugerencias de productos basadas en IA.

---

## Tecnologías Utilizadas

Este proyecto está construido con un stack de tecnologías moderno y eficiente:

- **Framework:** [Next.js](https://nextjs.org/) (usando App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes:** [Shadcn/ui](https://ui.shadcn.com/)
- **Inteligencia Artificial:** [Genkit](https://firebase.google.com/docs/genkit) con [Google Gemini](https://deepmind.google/technologies/gemini/)
- **Gestor de Paquetes:** [npm](https://www.npmjs.com/)

---

## Estructura del Proyecto

La estructura del código está organizada para ser escalable y mantenible:

- `src/app/`: Contiene las rutas y páginas de la aplicación.
- `src/components/`: Componentes de React personalizados y específicos de la aplicación.
- `src/components/ui/`: Componentes base de Shadcn/ui.
- `src/lib/`: Funciones de utilidad, helpers y lógica de negocio.
- `src/hooks/`: "Custom hooks" de React para reutilizar lógica con estado.
- `src/ai/`: Lógica de IA con Genkit (`genkit.ts`) y flujos (`flows.ts`).

---

## Theming e Internacionalización (i18n)

El proyecto está preparado para ser personalizable y accesible:

- **Temas (Theming):** Soporta temas claro y oscuro. La lógica se gestiona a través de `ThemeToggle.tsx` y `providers.tsx`.
- **Idiomas (i18n):** La arquitectura soporta múltiples idiomas, gestionado a través de `LanguageToggle.tsx`.

---

## Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

**1. Instalar Dependencias:**

```bash
npm install
```

**2. Ejecutar el Servidor de Desarrollo:**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

---

## Cómo Continuar Construyendo

### Añadir un Componente de UI

Usa la CLI de Shadcn/ui para añadir nuevos componentes base:

```bash
npx shadcn-ui@latest add <nombre-componente>
```

### Crear una Nueva Página

1.  Crea una carpeta en `src/app/<nombre-ruta>`.
2.  Dentro, crea un archivo `page.tsx`.
3.  Define y exporta tu componente de página de React.

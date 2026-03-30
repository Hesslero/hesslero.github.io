# Hesler Zacasa - Portafolio

Un portafolio moderno, responsive y bilingüe construido con **Astro** y **Tailwind CSS**. Presenta experiencia profesional, habilidades y proyectos como Desarrollador Full Stack.

🌐 **Sitio en vivo:** [Ver Portafolio](https://hesslero.github.io/)

## ✨ Características

- 🌍 **Soporte Bilingüe** - Inglés y Español con cambio de idioma fluido
- 🌙 **Modo Oscuro** - Toggle de tema claro/oscuro con persistencia en localStorage
- 📱 **Totalmente Responsivo** - Diseño mobile-first con menú hamburguesa para navegación móvil
- ⚡ **Alto Rendimiento** - Construido con Astro para generación de sitios estáticos optimizada
- 🎨 **Diseño Moderno** - Tailwind CSS con animaciones personalizadas y efectos de gradiente
- 🌈 **Animaciones Arcoíris** - Efectos de borde animado en elementos interactivos
- ♿ **Accesible** - HTML semántico y etiquetas ARIA para mejor accesibilidad
- 📊 **Línea de Tiempo Laboral** - Experiencia profesional con descripciones multilingües
- 🔗 **Integración Social** - Enlaces a GitHub, LinkedIn, Email y Teléfono (SMS)

## 🏗️ Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navegación con toggles de idioma/tema
│   │   ├── Footer.astro      # Pie de página con tech stack
│   ├── layouts/
│   │   └── Layout.astro      # Layout base con scripts globales
│   ├── pages/
│   │   ├── index.astro       # Página de inicio con perfil
│   │   ├── work.astro        # Línea de tiempo de experiencia laboral
│   │   ├── projects.astro    # Vitrina de proyectos
│   │   └── contact.astro     # Información de contacto
│   ├── assets/
│   │   ├── photo.jpeg        # Foto de perfil
│   │   ├── Astro_dark.svg    # Logo de Astro
│   │   ├── Astro_light.svg   # Logo de Astro (claro)
│   │   └── tailwindcss.svg   # Logo de Tailwind CSS
│   └── styles/
│       └── global.css        # Animaciones y utilidades personalizadas
├── public/
│   └── favicon.svg           # Favicon del sitio
├── astro.config.mjs          # Configuración de Astro
├── tailwind.config.mjs       # Configuración de Tailwind CSS
├── tsconfig.json             # Configuración de TypeScript
└── package.json              # Dependencias del proyecto

```

## 🚀 Primeros Pasos

### Requisitos Previos

- Node.js 16+ 
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver tu portafolio.

## 🛠️ Stack de Tecnología

**Frontend:**
- Astro
- React (opcional, para componentes dinámicos)
- TypeScript
- Tailwind CSS

**Características:**
- Diseño Responsivo (Mobile-First)
- Soporte Dark Mode
- Multilingüe (i18n)
- Animaciones CSS Personalizadas

## 📝 Configuración

### Sistema de Idioma

El portafolio utiliza un sistema de idioma personalizado con atributos `data-en` y `data-es`. La preferencia de idioma se almacena en localStorage.

Para agregar traducciones:
1. Añade atributos `data-en` y `data-es` a los elementos
2. La función `updatePageContent()` maneja la visualización según el idioma actual

### Sistema de Tema

El toggle de modo oscuro/claro está disponible en el encabezado. La preferencia de tema se persiste en localStorage y se sincroniza entre cargas de página.

## 🎨 Personalización

### Actualizar Información Personal

Edita los siguientes archivos para personalizar tu portafolio:

- `src/pages/index.astro` - Perfil, sobre mí y tech stack
- `src/pages/work.astro` - Entradas de experiencia laboral
- `src/pages/contact.astro` - Información de contacto y enlaces sociales
- `src/components/Header.astro` - Estructura de navegación

### Modificar Colores

Edita `tailwind.config.mjs` para personalizar el esquema de colores. El portafolio utiliza:
- Fondo: white/gray-950
- Texto: gray-900/white (consciente del dark mode)
- Acentos: gradientes arcoíris en animaciones

### Actualizar Visualización de Tech Stack

El ticker de tecnologías en la página de inicio se puede editar en `src/pages/index.astro`. Modifica el array de tecnologías con las tuyas propias.

## 📦 Compilar e Implementar

### Compilar para Producción

```bash
npm run build
```

Esto genera un sitio estático en el directorio `dist/`.

### Vista Previa de la Compilación

```bash
npm run preview
```

### Implementar en Vercel

El proyecto está optimizado para Vercel:

```bash
npm install -g vercel
vercel
```

### Implementar en Netlify

1. Conecta tu repositorio de GitHub a Netlify
2. Establece comando de compilación: `npm run build`
3. Establece directorio de publicación: `dist/`
4. ¡Implementa!

## 🔧 Comandos Disponibles

| Comando | Propósito |
|---------|-----------|
| `npm run dev` | Inicia el servidor de desarrollo local |
| `npm run build` | Compila el sitio para producción |
| `npm run preview` | Visualiza la compilación de producción |
| `npm run astro add` | Añade integraciones de Astro |
| `npm run astro check` | Verifica tipos en tu código |

## 📧 Contacto

- **Email:** onandyzacasa@hotmail.es
- **GitHub:** [@Hesslero](https://hesslero.github.io/)
- **LinkedIn:** [Hesler Zacasa](https://www.linkedin.com/in/hesler-zacasa-524a34b9/?locale=en)
- **Teléfono:** +504 32098109

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## 🙏 Reconocimientos

- [Astro](https://astro.build) - Generador de sitios estáticos
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS orientado a utilidades
- Inspirado en principios modernos de diseño web

---

**Hecho con ❤️ por Hesler Zacasa | 2026**

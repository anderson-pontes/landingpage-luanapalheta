# Landing Page – Estúdio de Arquitetura

Landing page moderna e responsiva para uma profissional de Arquitetura e Interiores. Inclui seções completas, tema claro/escuro com persistência, portfólio com galeria por projeto (modal + lightbox), SEO básico e formulário de contato integrado (Formspree).

## Tecnologias
- Vite + React + TypeScript
- Tailwind CSS (via `@tailwindcss/vite`) e utilitários de animação (`tw-animate-css`)
- CSS Variables (OKLCH) para tema e paleta (terracota)

## Requisitos
- Node.js 18+

## Instalação
```bash
npm install
```

## Desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:5173`.

## Build e Preview
```bash
npm run build
npm run preview
```

## Estrutura
```
landingpage-luanapalheta/
├─ index.html                # SEO básico + fontes + schema.org
├─ src/
│  ├─ main.tsx               # Bootstrap React
│  ├─ App.tsx                # Layout principal e seções
│  ├─ index.css              # Tema, paleta e bases do Tailwind
│  ├─ components/ui/button.tsx (exemplo gerado pelo template)
│  └─ assets/
└─ vite.config.ts
```

## Funcionalidades
- Navbar com alternância de tema (Dark Mode por padrão)
- Seções: Hero, Sobre, Serviços, Portfólio, Depoimentos, CTA, Contato, Footer
- Portfólio: ao clicar em um projeto abre modal com galeria e lightbox (setas do teclado, ESC para fechar)
- Formulário de contato com validação básica e feedback
- Paleta de cores em `OKLCH` com primária terracota
- SEO: título, descrição, Open Graph e `ProfessionalService` (JSON-LD)

## Personalização Rápida
- Cores/tema: edite variáveis em `src/index.css` (blocos `:root` e `.dark`)
- Textos/links: ajuste em `src/App.tsx` (Navbar, seções e Footer)
- Projetos do portfólio: altere o array `PROJECTS` em `src/App.tsx` (título, tags, imagens e ficha técnica)
- Fonte: definida em `index.html` (Google Fonts – Plus Jakarta Sans)

## Formulário (Formspree)
1. Crie um formulário em Formspree.
2. Troque o endpoint no componente `Contato` em `src/App.tsx`:
   ```ts
   const endpoint = 'https://formspree.io/f/SEU_ID'
   ```
3. Opcional: integre com Resend/EmailJS/backend próprio.

## Acessibilidade
- Suporte a teclado no lightbox (← → e Esc)
- Foco visível (`focus-visible` + `ring`)
- Imagens com `alt` descritivo

## Deploy
- Static hosting (Vercel, Netlify, GitHub Pages)
- Rodar `npm run build` e publicar a pasta `dist/`

## Notas sobre Lint/CSS
- Se seu linter não reconhecer diretivas do Tailwind (ex.: `@apply`), ajuste a configuração do Stylelint/VSCode para Tailwind ou ignore avisos. O build do Vite/Tailwind funciona normalmente.

## Licença
Uso interno/portfolio. Adapte conforme sua necessidade.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

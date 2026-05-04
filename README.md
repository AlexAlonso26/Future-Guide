# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

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

## Publicar no GitHub

1. Crie um repositório **vazio** em [github.com/new](https://github.com/new) (sem README/licença gerados pelo site, para evitar conflito no primeiro push).
2. Na pasta do projeto, ligue o remoto e envie (troque `SEU-USUARIO` e `NOME-DO-REPO`):

```bash
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

3. Se o GitHub pedir login, use um **Personal Access Token** no lugar da senha, ou o **GitHub CLI** (`gh auth login`).

**Build local:** `npm install` → `npm run build` → pasta `dist/` (não vai para o Git por causa do `.gitignore`).

### GitHub Pages (evitar página em branco)

O workflow `.github/workflows/deploy-github-pages.yml` faz o build e envia o resultado para o branch **`gh-pages`**. O site em produção tem de servir **esse** branch, não o código-fonte em `main`.

1. **Settings** → **Actions** → **General** → **Workflow permissions** → ative **Read and write permissions** (para o GitHub Actions poder atualizar `gh-pages`).
2. Faça push em `main` (ou execute o workflow manualmente em **Actions**) e espere o job **Deploy to GitHub Pages** concluir com sucesso.
3. **Settings** → **Pages** → **Build and deployment** → **Source:** *Deploy from a branch* → **Branch:** `gh-pages` → **Folder:** `/ (root)` → Save.

Se em Pages estiver **main** e **/(root)**, o GitHub serve o `index.html` do projeto com `<script src="/src/main.tsx">`, que não existe no servidor estático — a página fica em branco. O endereço do site continua a ser `https://SEU-USUARIO.github.io/NOME-DO-REPO/` (ex.: [Future-Guide](https://alexalonso26.github.io/Future-Guide/)).

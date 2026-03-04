## CORS Policy (Cross-Origin Resource Sharing)

- CORS means Cross-Origin Resource Sharing.

- It controls which external origins (URLs) are allowed to access backend resources.

- Think of it like: “Don’t allow everyone inside the house. Only allow those who are approved.”

- If the URL, port number, or protocol is different, it is considered a different origin.

- When the origin is not allowed by the server, a CORS error occurs.

## Example of Different Origin

`http://localhost:3000`

`http://localhost:5173`

Even though both are localhost, the port numbers are different, so it is treated as a different origin.

## Solution to CORS Error

- Whitelist the frontend URL in the backend.
  Example:

```bash 
origin: "http://localhost:3000" 

```

- Use the CORS npm package in the backend:

```bash 
const cors = require("cors");
app.use(cors());

```

- In Vite, you can use a proxy configuration to avoid CORS issues during development.

## Bad Practice (Not Recommended Approach)

- Running `npm run build ` in the frontend creates a dist folder with static HTML, CSS, and JS files.

- Moving this dist folder into the backend project.

- Using middleware in `server.js`:

```bash
app.use(express.static('dist'));

```

- This method only serves static files.

- If you make changes in the frontend code, the app will not update dynamically.

- You must rebuild the project every time to see changes.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

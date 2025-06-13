// src/main.tsx
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './style.scss';
import ViewportIndicator from './viewportIndicator';

const root = createRoot(document.getElementById('root')!);

root.render(
  <>
    <App />
    <ViewportIndicator />
  </>
);

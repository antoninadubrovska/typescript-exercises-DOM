//import './style.css';
import './styles/global.css';
import './styles/counter.css';

import { createHeader } from './components/header';
import { createCounter } from './components/counter';

// const app = document.querySelector<HTMLElement>('#app');

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  const header = createHeader();
  const counter = createCounter();

  app.append(header, counter);
}
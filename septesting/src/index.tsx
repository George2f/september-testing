import { createRoot } from 'react-dom/client';
import './index.scss';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './services/reportWebVitals';
import App from './App';
import { GreetProvider } from './contexts/greetContext';
import greeting from './consts/greeting';
import greet from './services/greet';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <GreetProvider greeting={greeting.GREETING} callback={greet}>
        <App />
      </GreetProvider>
    </BrowserRouter>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

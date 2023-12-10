import ReactDOM from 'react-dom/client';
import App from './components/App';

const runApp = () => {
  const rootElement = document.getElementById('root');
  if (rootElement === null) return;
  const root = ReactDOM.createRoot(rootElement);
  root.render(App());
};

runApp();
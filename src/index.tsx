// npm install axios @types/axios
// npm install react-router-dom @types/react-router-dom
// npm install styled-components@5.3.5 @types/styled-components  
// npm install react-query
// npm install react-modal
// npm install --dev @types/react-modal



import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './pages/Router'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);




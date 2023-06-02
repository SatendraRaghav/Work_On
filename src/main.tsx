import React from 'react'
import ReactDOM from 'react-dom/client'
import Apple from './Apple';
import { DataProvider } from './Reducer'
import { ProSidebarProvider } from 'react-pro-sidebar';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <ProSidebarProvider>
      <Apple />
    </ProSidebarProvider>
    </DataProvider>
  </React.StrictMode>,
)

import React, { ComponentType } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import Hyperform from './App'
import { DataProvider } from './Reducer'
import { ProSidebarProvider } from 'react-pro-sidebar';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
function render(App: ComponentType) {
    root.render(
        <React.StrictMode>
        <DataProvider>
          <ProSidebarProvider>
          <Hyperform />
        </ProSidebarProvider>
        </DataProvider>
      </React.StrictMode>,
    );
  }
//new comment

reportWebVitals();
export default render;
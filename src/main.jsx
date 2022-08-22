import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import CrudUsers from './App'
import './App.css'

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <CrudUsers />
  </React.StrictMode>,
  
)


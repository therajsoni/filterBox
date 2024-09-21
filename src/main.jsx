import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BioProvider } from './context/dataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BioProvider>
    <App />
    </BioProvider>
  </React.StrictMode>,
)

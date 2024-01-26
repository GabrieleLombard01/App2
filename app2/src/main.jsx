import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Comp1, Comp2 } from './AppFunc1.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App />
    <Comp1/>
    <Comp2/>
    </>
  </React.StrictMode>,
)

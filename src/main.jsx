// import lib
import React from 'react'
import ReactDOM from 'react-dom/client'

// import app
import App from './App/App'

// import reset style sheet
import './main.css'

// mount app to main
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

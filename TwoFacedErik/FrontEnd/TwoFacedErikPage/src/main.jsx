
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './styles/style.scss'

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
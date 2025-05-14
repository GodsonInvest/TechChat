import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './compornents/Login'
import Interface from './compornents/Profile/Interface'
import Accueil from './compornents/Acceuil/Accueil'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Interface />} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppNavbar from './Components/AppNavbar/AppNavbar'
import HomePage from './Pages/HomePage/HomePage'
import MarinePage from './Pages/MarinePage/MarinePage'
import MarineAddPage from './Pages/MarineAddPage/MarineAddPage'
import MarineUpdatePage from './Pages/MarineUpdatePage/MarineUpdatePage'
import PiratePage from './Pages/PiratePage/PiratePage'
import PirateAddPage from './Pages/PirateAddPage/PirateAddPage'
import PirateUpdatePage from './Pages/PirateUpdatePage/PirateUpdatePage'
import ShichibukaiPage from './Pages/ShichibukaiPage/ShichibukaiPage'
import ShichibukaiAddPage from './Pages/ShichibukaiAddPage/ShichibukaiAddPage'
import ShichibukaiUpdatePage from './Pages/ShichibukaiUpdatePage/ShichibukaiUpdatePage'

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Router>
        <header className="mb-5">
          <AppNavbar></AppNavbar>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marines" element={<MarinePage />} />
          <Route path="/marines/add" element={<MarineAddPage />} />
          <Route path="/marines/:id" element={<MarineUpdatePage />} />
          <Route path="/pirates" element={<PiratePage />} />
          <Route path="/pirates/add" element={<PirateAddPage />} />
          <Route path="/pirates/:id" element={<PirateUpdatePage />} />
          <Route path="/shichibukai" element={<ShichibukaiPage />} />
          <Route path="/shichibukai/add" element={<ShichibukaiAddPage />} />
          <Route path="/shichibukai/:id" element={<ShichibukaiUpdatePage />} />
        </Routes>
      </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)

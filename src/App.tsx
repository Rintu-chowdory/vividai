import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import Gallery from './pages/Gallery'
import Templates from './pages/Templates'
import Login from './pages/Login'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 py-8 text-center text-xs text-white/25">
      <div className="flex items-center justify-center gap-6">
        <a href="/datenschutz" className="hover:text-violet-400 transition-colors">Datenschutz</a>
        <a href="/impressum" className="hover:text-violet-400 transition-colors">Impressum</a>
        <span>VividAI &copy; 2025</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/create"
          element={<><Navbar /><Create /><Footer /></>}
        />
        <Route
          path="/gallery"
          element={<><Navbar /><Gallery /><Footer /></>}
        />
        <Route
          path="/templates"
          element={<><Navbar /><Templates /><Footer /></>}
        />
        <Route
          path="/datenschutz"
          element={<><Navbar /><Datenschutz /><Footer /></>}
        />
        <Route
          path="/impressum"
          element={<><Navbar /><Impressum /><Footer /></>}
        />
      </Routes>
    </BrowserRouter>
  )
}

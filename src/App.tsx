import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import Gallery from './pages/Gallery'
import Templates from './pages/Templates'
import Login from './pages/Login'
import Datenschutz from './pages/Datenschutz'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
              </Routes>
              {/* Footer */}
              <footer className="mt-16 border-t border-white/5 py-8 text-center text-xs text-white/25">
                <div className="flex items-center justify-center gap-6">
                  <a href="/datenschutz" className="hover:text-violet-400 transition-colors">Datenschutz</a>
                  <a href="/datenschutz" className="hover:text-violet-400 transition-colors">Impressum</a>
                  <span>VividAI &copy; 2025</span>
                </div>
              </footer>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Create from './pages/Create'
import Gallery from './pages/Gallery'
import Templates from './pages/Templates'
import Login from './pages/Login'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'
import Pricing from './pages/Pricing'
import NotFound from './pages/NotFound'

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 py-8 text-center text-xs text-white/25">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <Link to="/datenschutz" className="hover:text-violet-400 transition-colors">Datenschutz</Link>
        <Link to="/impressum" className="hover:text-violet-400 transition-colors">Impressum</Link>
        <span>VividAI &copy; 2026</span>
      </div>
    </footer>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Navbar />
      {children}
      <Footer />
    </ErrorBoundary>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/create" element={<Layout><Create /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/templates" element={<Layout><Templates /></Layout>} />
          <Route path="/datenschutz" element={<Layout><Datenschutz /></Layout>} />
          <Route path="/impressum" element={<Layout><Impressum /></Layout>} />
          <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

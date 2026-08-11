import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Membership from './pages/Membership'
import Join from './pages/Join'
import Opportunities from './pages/Opportunities'
import PropertyDetailPage from './pages/PropertyDetailPage'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import Button from './components/Button'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="membership" element={<Membership />} />
          <Route path="join" element={<Join />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="opportunities/:id" element={<PropertyDetailPage />} />
          <Route path="partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="mx-auto max-w-3xl px-4 py-24 text-center">
                <h1 className="font-display text-3xl font-bold text-ink">Page Not Found</h1>
                <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
                <Button to="/" className="mt-8">
                  Return Home
                </Button>
              </section>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

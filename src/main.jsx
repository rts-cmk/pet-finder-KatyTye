import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import Error from './pages/Error.jsx'
import Intro from './pages/Intro.jsx'
import App from './pages/App.jsx'
import { StrictMode } from 'react'
import Pet from './pages/Pet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/messages" element={<App />} />
        <Route path="/likes" element={<App />} />
        <Route path="/profile" element={<App />} />
        <Route path="/pet/*" element={<Pet />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

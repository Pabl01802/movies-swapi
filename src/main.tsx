import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// COMPONENTS
import { Home } from './components/Home/Home'
import { Movie } from './components/Movie/Movie'
import { NotFound } from './components/NotFound/NotFound'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Movie />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

import { Link } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => {
  return (
    <main className='not-found-page'>
      <section className='not-found-content'>
        <h1>Page not found</h1>
        <Link to='/' className='home-button'>Go to home</Link>
      </section>
    </main>
  )
}
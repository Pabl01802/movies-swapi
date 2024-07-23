import { useState, useEffect } from 'react'
import axios from 'axios'

import { MovieListItem } from '../MovieListItem/MovieListItem'
import { Loading } from '../Loading/Loading'

import { IMovie } from '../../interfaces'

import './Home.css'

export const Home = () => {

  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [movies, setMovies] = useState<IMovie[] | null>()
 
  useEffect(() => {
    const getData = async () => {
      try{
        const res = await axios.get('https://swapi.dev/api/films/')
        setMovies(res.data.results)
        setLoading(false)
      }catch(err){
        setError('Cannot load movies')
        setLoading(false)
      }
    }

    getData()
  }, [])

  const allMovies = movies?.map((movie:IMovie, index) => (
    <MovieListItem data={movie} id={index} key={`movie-${movie.episode_id}`} />
  ))

  return (
    <main className='home-page'>
      <h1>Movies from swapi.dev</h1>
      <div>
        Filters
      </div>
      <ul>
        {
          error ? error : loading ? <Loading /> : allMovies
        }
      </ul>
    </main>
  )
}
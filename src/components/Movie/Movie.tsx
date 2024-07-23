import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Loading } from '../Loading/Loading'
import { Characters } from '../Characters/Characters'
import './Movie.css'

import { IMovie } from '../../interfaces'

export const Movie = () => {

  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [movie, setMovie] = useState<IMovie | null>(null)

  const params = useParams()

  useEffect(() => {
    const getMovie = async () => {
      try{
        const res = await axios.get(`https://swapi.dev/api/films/${params?.id}`)
        console.log(res)
        setMovie(res.data)
        setLoading(false)
      }catch(err){
        console.log(err)
        setError('Cannot load movie info')
        setLoading(false)
      }
    }

    getMovie()
  }, [params])

  return (
    <main className='movie-page'>
      {
        error ? error : loading ? <Loading /> : movie && (
          <>
            <h1>{movie?.title}</h1>
            <p>Directed by: {movie?.director}</p>
            <p>{movie?.opening_crawl}</p>
            <h3>Characters in this movie:</h3>
            <Characters characters={movie?.characters!} />
          </>
        )
      }
    </main>
  )
}
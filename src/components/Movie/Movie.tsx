import React from 'react'
import { IMovieProps } from '../../interfaces'
import { Link } from 'react-router-dom'

import './Movie.css'

export const Movie = ({ data }:IMovieProps) => {

  return (
    <li className='movie-list'>
      <h3>{data.title}</h3>
      <Link className='link-button' to={data.episode_id.toString()}>Read more</Link>
    </li>
  )
}

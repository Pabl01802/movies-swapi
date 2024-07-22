import React from 'react'
import { IMovieProps } from '../../interfaces'
import { Link } from 'react-router-dom'

import './MovieListItem.css'

export const MovieListItem = ({ data, id }:IMovieProps) => {

  return (
    <li className='movie-list'>
      <h3>{data.title}</h3>
      <Link className='link-button' to={(id+1).toString()}>Read more</Link>
    </li>
  )
}

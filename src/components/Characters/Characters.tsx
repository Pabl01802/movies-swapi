import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ICharacterProps, ICharacter } from '../../interfaces'
import { Loading } from '../Loading/Loading'

export const Characters = ({ characters }:ICharacterProps) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [chars, setChars] = useState<ICharacter[] | null>(null)
  const [error, setError] = useState<string>('')

  const getCharacter = async (url:string) => {
    try{
      const res = await axios.get(url)
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    const getCharacters = async () => {
      try{
        const res = await Promise.all([...characters.map(char => axios.get(char))])
        console.log(res.length)
        if(res.length === characters.length) setLoading(false)
      }catch(err){
        setError('Cannot load characters')
        console.log(err)
      }
    }
    getCharacters()
  }, [])

  const charactersList = chars?.map((char, index) => (
    <li key={`character-${index}`}>
      {char.name}
    </li>
  ))

  return (
    <div>
      {
        error ? error : loading ? <Loading /> : charactersList
      }
    </div>
  )
}
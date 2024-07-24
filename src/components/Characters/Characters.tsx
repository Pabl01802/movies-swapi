import { useState, useEffect } from 'react'
import axios from 'axios'
import { ICharacterProps, ICharacter } from '../../interfaces'
import { Loading } from '../Loading/Loading'

export const Characters = ({ characters }:ICharacterProps) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [chars, setChars] = useState<ICharacter[] | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const getCharacters = async () => {
      try{
        const res = await Promise.all([...characters.map(char => axios.get(char))])
        if(res.length === characters.length){
          setLoading(false)
          setChars(res.map((char) => char.data))
        } 
        else {
          setLoading(false)
          setError('Cannot load characters')
        }
      }catch(err){
        setLoading(false)
        setError('Cannot load characters')
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
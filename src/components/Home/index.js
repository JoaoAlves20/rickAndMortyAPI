import { useEffect, useState } from 'react';

import Info from '../Info'

import { fetchCharacter } from '../../services/fetchCharacter'

import { DivHome, DivBodyHome, ImgHome } from './styles'

export const Home = () => {
  const [characters, setCharacter] = useState()

  useEffect(()=> {
    const request = async () => {
      const response = await fetchCharacter(1)

      setCharacter(response)
    }

    request()
  }, [])
  
  return (
    <>
      <DivBodyHome>
        {characters ? characters.map(character => (
          <DivHome key={character.id}>
            <ImgHome src={character.image} alt={character.name}/>
            <Info 
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
            />
          </DivHome>
        )) : <h1>Opa</h1>}
      </DivBodyHome>
    </>
  )
}
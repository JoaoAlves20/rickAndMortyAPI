import { useEffect, useState } from 'react';

import Info from '../Info'

import { fetchCharacters, fetchCharacter } from '../../services/fetchCharacter'

import { DivHome, DivBodyHome, ImgHome, DivButton } from './styles'

export const Home = () => {
  const [characters, setCharacters] = useState()
  const [character, setCharacter] = useState()

  const request = async (id) => {
    const response = await fetchCharacter(id)

    setCharacter(response)
  }

  useEffect(()=> {
    const request = async () => {
      const response = await fetchCharacters(1)

      setCharacters(response)
    }

    request()
  }, [])

  if (characters) {
    return (
      <>
        <DivBodyHome>
          {character ? (
              <DivHome>
                <ImgHome src={character.image} alt={character.name}/>
                <Info 
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  getCharacter={() => request(character.id)}
                />
                <DivButton>
                  <button onClick={() => setCharacter()}>Voltar</button>
                </DivButton>
              </DivHome>
          ) : characters.map(character => (
            <DivHome key={character.id}>
              <ImgHome src={character.image} alt={character.name}/>
              <Info 
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                getCharacter={() => request(character.id)}
              />
            </DivHome>
          ))}
        </DivBodyHome>
      </>
    )
  } else {
    return <h1>erro</h1>
  }
}
export const fetchCharacters = async (page) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  const { results } = await response.json()

  return results
}

export const fetchCharacter = async (characterId) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
  const data = await response.json()

  return data
}
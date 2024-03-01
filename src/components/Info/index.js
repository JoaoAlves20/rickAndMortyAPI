import PropTypes from 'prop-types';

import { DivInfo, LineStyle, NameClick } from './styles';

export default function Info({ name, status, species, gender, getCharacter }) {
  return (
    <DivInfo>
      <NameClick onClick={getCharacter}>{name}</NameClick><br />
      <label>Status - Species:</label>
      <LineStyle color={status}>{status} - {species}</LineStyle><br />
      <label>Gender:</label>
      <h3>{gender}</h3>
    </DivInfo>
  )
}

Info.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  getCharacter: PropTypes.func
}
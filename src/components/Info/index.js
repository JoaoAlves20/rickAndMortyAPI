import PropTypes from 'prop-types';

import { DivInfo, NameInfo } from './styles';

export default function Info({ name, status, species, gender }) {
  return (
    <DivInfo>
      <NameInfo>{name}</NameInfo>
      <h2>{status} - {species}</h2>
      <h2>{gender}</h2>
    </DivInfo>
  )
}

Info.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
}
import styled from "styled-components";

export const DivInfo = styled.div`
  margin: 10px;
  width: 100vh;
`;

export const LineStyle = styled.h3`
  text-decoration: underline 3px ${(props) => props.color === 'Alive' ? 'rgb(91, 219, 52)': (
    props.color === 'Dead' ? 'rgb(219, 52, 52)' : 'rgb(113, 113, 113)'
  )};
`;

export const NameClick = styled.h2`
  cursor: pointer;
  h2:hover{
    background-color: rgb(255, 255, 255);
  }
`;
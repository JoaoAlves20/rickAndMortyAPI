import styled from "styled-components";

export const DivHome = styled.div`
  width: 600px;
  height: 200px;
  background-image: linear-gradient(45deg,
      rgb(30, 30, 30),
      rgb(20, 20, 20));
  margin: 10px;
  margin-left: 10px;
  padding: 10px;
  display: flex;
  border-radius: 100px;
`;

export const DivBodyHome = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ImgHome = styled.img`
  border-radius: 50%;
`;

export const DivButton = styled.div`
  align-self: center;
  margin-right: 3px;

  button {
    width: 70px;
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    border: 2px solid rgb(65, 137, 119);
    border-radius: 30px;
    cursor: pointer;
    background-color: rgb(65, 137, 119);
    color: white;
    border: none;
  }

  button:hover {
    background-color: white;
    color: black;
  }
`;
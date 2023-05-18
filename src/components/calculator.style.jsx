import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  
}
`;
export const Main = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Box = styled.div`
  width: 30%;
`;
export const ContainerBoxButton = styled.section`
  background-color: black;
  border-radius: 2em;
  height: 90vh;
  h1 {
    height: 15vh;
    color: white;
    font-size: 3.5em;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 30px;
  }
`;
export const BoxButton = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  flex-wrap: wrap;
  button {
    width: 3em;
height: 3em;
    font-size: 1.5em;
    border-radius: 2em;
    margin: 0.3em;
  }
  button:hover {
    cursor: pointer;
  }
`;
export const Gray = styled.div`
  button {
       background-color: #505050;
    color: white;
  }
`;
export const Orange = styled.div`
  button {
    background-color: #ff9500;
    color: white;
  }
`;

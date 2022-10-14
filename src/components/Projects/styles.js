import styled from 'styled-components';



export const Body = styled.body`
    width:100vw;
    height:100vh;
    background-color: burlywood;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.header`
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: cadetblue;
    border-bottom-left-radius: 20em 5em;
    border-bottom-right-radius: 20em 5em;


h1{
    color: #424242;
    font-size: 45px;
    margin-top: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
`

export const Main = styled.main`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
 
`

export const Option = styled.div`
  background-color:cadetblue ;
  width: 95%;
  height: 80vh;
  border-top-left-radius: 5em 5em;
  border-bottom-right-radius: 5em 5em;
  border-bottom-left-radius: 5em 5em;
  border-top-right-radius: 5em 5em;

`
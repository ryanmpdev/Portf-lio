import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const Body = styled.body`
    width:100vw;
    height:100vh;
    background-color: burlywood;

`

export const Header = styled.header`
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: cadetblue;
    border-bottom-left-radius: 20em 7em;
    border-bottom-right-radius: 20em 7em;
  
  img{
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 100px;

  }

  h1{
    color: #424242;
    font-size: 45px;
    margin-top: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  h2{
    color: #424242;
    font-size: 35px;
    margin-top: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`

export const SLink = styled(Link)`
    text-decoration:none;
`

export const Main = styled.main`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Option = styled.figure`

  img{
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 100px;
    border: solid cadetblue;

  }

  h3{
    color: #312B2B;
    font-size: 30px;
    margin-left: 5px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
  }
`

export const Footer = styled.footer`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: cadetblue;
    border-top-left-radius: 15em 2em;
    border-top-right-radius: 15em 2em;

`

export const Redes = styled.div`
    width: 500px;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

 img{
    width: 50px;
 }
`


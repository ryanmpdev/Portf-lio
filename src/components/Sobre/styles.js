import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Body = styled.body`
    background-color: #616161;
 
`

export const Header = styled.header`
    height: 20vh;
    display: flex;
    color: #F1F8E9;
    align-items: center;
    background-color: #424242;
    border-bottom-left-radius: 5em;
    border-bottom-right-radius: 5em;

    img{
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 100px;
    }

    h1{
        padding: 5px;
        border: solid;
        margin-left: 6vw;
    }
`

export const Section = styled.section`
  width: 10vw;
  display: flex;
  margin-left: 1vw;
  align-items: center;
  justify-content: space-evenly;
`

export const SLink = styled(Link)`
    text-decoration:none;

    button{
        border: none;
        color: #F1F8E9;
        cursor: pointer;
        font-size: 30px;
        padding: 1px 5px;
        background-color: #424242;
    }
`

export const Main = styled.main`
    height: 150vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
`

export const SectionOne = styled.section`
    width: 93vw;
    height: 41vh;
    display: flex;
    align-items: center;
    background-color: #424242;

    img{
        margin: 4px;
        width: 35vw;
        height: 40vh;
        object-fit: cover;
    }

`

export const Text = styled.div`
    width: 56vw;
    height: 38vh;
    display: flex;
    color: #F1F8E9;
    margin-left: 1vw;
    align-items: center;
    flex-direction: column;

    h2{
        font-size: 30px;
    }

    p{
        width: 56vw;
        font-size: 20px;
        margin-top: 1vw;
    }
 
`

export const SectionTwo = styled.section`
    width: 93vw;
    height: 60vh;
    display: flex;
    align-items: center;
    background-color: #424242;

    img{
        margin: 4px;
        width: 35vw;
        height: 59vh;
        object-fit: cover;
    }

`

export const TextOne = styled.div`
    width: 56vw;
    height: 57vh;
    display: flex;
    color: #F1F8E9;
    margin-left: 1vw;
    align-items: center;
    flex-direction: column;

    h2{
        font-size: 30px;
    }

    p{
        width: 56vw;
        font-size: 20px;
        margin-top: 1vw;
    }
 
`


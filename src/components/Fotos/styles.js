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
    height:250vh;
    display: flex;
    margin-top: 3vw;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const SectionOne = styled.section`
    width: 30vw;
    height: 30vh;
    display: flex;
    background-color: #424242;

    img{
        width: 30vw;
        height: 40vh;
        object-fit: cover;
    }

`
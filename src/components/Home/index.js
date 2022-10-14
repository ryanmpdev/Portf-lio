import React from 'react'
import * as S from './styles';
import {Menu, Localidade, Projeto, Instagram, Twitter, Linkedin, Github} from '../../images'

export default function Home(){

    return(
        <S.Body>
         <S.Header>
          <img src={Projeto} alt="Menu" />
          <h1>Olá,sejam bem vindos!!</h1>
          <h2>Eu sou o Ryan!</h2>
         </S.Header>
         <S.Main>

         <S.Option>
         <S.SLink to="/Sobre">
            <img src={Menu} alt="Sobre mim" />
            <h3>Sobre Mim</h3>
         </S.SLink>   
        </S.Option>

        <S.Option>
         <S.SLink to="/Fotos">
            <img src={Localidade} alt="Sto antônio" />
            <h3>Fotografias</h3>
         </S.SLink>   
        </S.Option>

        <S.Option>
         <S.SLink to="/Projects">
            <img src={Projeto} alt="Projetos" />
            <h3>Projetos</h3>
         </S.SLink>   
        </S.Option>

         </S.Main>

         <S.Footer>
            <S.Redes>
               <a href="https://www.instagram.com/ryanmacielx/" target="_blank" rel="noreferrer"><img src={Instagram} alt="instagram" /></a>
               <a href="https://twitter.com/ryanmacielp" target="_blank" rel="noreferrer"><img src={Twitter} alt="instagram" /></a>
               <a href="https://github.com/ryanmpdev" target="_blank" rel="noreferrer"><img src={Github} alt="instagram" /></a>  
               <a href="https://www.linkedin.com/in/ryan-maciel-1b6147234/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="instagram" /></a>
            </S.Redes>
         </S.Footer>
        </S.Body>
    )
}
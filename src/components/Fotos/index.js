import React from 'react'
import * as S from './styles';
import { Localidade, Praia, Agua, Balsa, Barcos, Cachorro, Cb, Ceu, Cocos, Eunapolis, Gato, Nuvem, Onda, Pedras, Pier, Rio, Sa, Sol, Veleiro  } from '../../images'

function Fotos() {
  return (
    <S.Body>
            <S.Header>
        <S.Section>
      <S.SLink to="/">
            <button>&#8656; </button>
         </S.SLink>   
        <img src={Localidade} alt="Menu" />
          
        </S.Section>
        <h1>Olá! sejam bem vindos a sessão, aqui você pode ver minhas fotografias!!</h1>
      </S.Header>

      <S.Main>
        <S.SectionOne>
          <img src={Praia} alt="Praia de sto andré" />
        </S.SectionOne> 

       <S.SectionOne>
          <img src={Cocos} alt="Coqueiros" />
        </S.SectionOne> 
        
        <S.SectionOne>
          <img src={Barcos} alt="imagem do pôr do sol" />
        </S.SectionOne>  
        
       <S.SectionOne>
          <img src={Cb} alt="Pô do sol em conceição da barra" />
        </S.SectionOne>    
        
       <S.SectionOne>
          <img src={Ceu} alt="Céu de tarde em cabrália" />
        </S.SectionOne>   
        
        <S.SectionOne>
          <img src={Agua} alt="Água nas pedras na praia das tartarugas" />
        </S.SectionOne>  
      
        <S.SectionOne>
          <img src={Balsa} alt="foto tirada no por do sol na balsa" />
        </S.SectionOne>  
     
        <S.SectionOne>
          <img src={Pedras} alt="pedras da praia das tartarugas" />
        </S.SectionOne>

        <S.SectionOne>
          <img src={Eunapolis} alt="foto tirada a noite em um dia chuvoso em eunápolis" />
        </S.SectionOne>

        <S.SectionOne>
          <img src={Nuvem} alt="foto tirada em sto andré" />
        </S.SectionOne>

        <S.SectionOne>
          <img src={Onda} alt="foto tirada na ponte do sto antônio" />
        </S.SectionOne>

        <S.SectionOne>
          <img src={Pier} alt="foto tirada do pier" />
        </S.SectionOne>

        <S.SectionOne>
          <img src={Rio} alt="foto tirada em sto andré" />
        </S.SectionOne>

        <S.SectionOne>
          <img src={Sa} alt="foto tirada na divisa da praia com o rio em sto andré" />
        </S.SectionOne>

        <S.SectionOne>
          <img src={Sol} alt="foto tirada em conceição da barra" />
        </S.SectionOne>

        <S.SectionOne>
          <img src={Veleiro} alt="foto tirada em sto andré" />
        </S.SectionOne>

        <S.SectionOne>
          <img src={Cachorro} alt="foto da minha cachoriinha" />
        </S.SectionOne>

        <S.SectionOne>
          <img src={Gato} alt="foto do de um gato a noite" />
        </S.SectionOne>


      </S.Main>
    </S.Body>
  )
}

export default Fotos
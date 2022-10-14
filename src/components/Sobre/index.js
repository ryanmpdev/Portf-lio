import React from 'react'
import * as S from './styles';
import { Eu, Projeto, Localidade, Praia } from '../../images'


function Sobre() {
  return (
    <S.Body>
      <S.Header>
        <S.Section>
      <S.SLink to="/">
            <button>&#8656; </button>
         </S.SLink>   
        <img src={Eu} alt="eu" />
          
        </S.Section>
        <h1>Olá! sejam bem vindos a sessão, aqui você pode me conhecer melhor!!</h1>
      </S.Header>

      <S.Main>
        <S.SectionOne>
          <img src={Projeto} alt="eu" />
          <S.Text>
            <h2>Programação!!</h2>
            <p>&emsp;Bom tem alguns motivos pra mim ter escolhido a programação, mais a principio foi por ser uma profissão futurística, desafiador e com um bom mercado.</p>
            <p>&emsp;E com o apoio da familia me deixou confiante, tambem por acreditar que eu tenho potencial e capacidade para me adaptar as exigências do mercado.</p>
            <p>&emsp;Atualmente meu foco principal é no reactJS, mais não deixando de lado aprimorar meus conhecimentos em HTML, CSS  e javaScript, que eu já tenho um certo conhecimento mais tenho na cabeça que ainda tem muito oque aprender, e após ter uma base boa do reactJS quero estudar TypeScript, e assim continuar explorando os conteúdos, mais focando no que estou precisando.  </p>
          </S.Text>
        </S.SectionOne> 

       <S.SectionOne>
          <img src={Localidade} alt="eu" />
          <S.Text>
            <h2>Localidade!!</h2>
            <p>&emsp;Eu moro no Sto Antônio, no municipio de cabrália-BA.</p>
            <p>&emsp;É não tem muito oque dizer, é uma região quem vem crescendo cada vez mais, desde que a seleção da alemanha se hospedou no campo bahia em 2014, inclusive a praia de sto andré(Povoado vizinho onde fica o campo bahia),se chama praia do 7 a 1, é uma praia bastante famosa da região, mais além do motivo da seleção alemã, ela tambem tem a sua beleza e por sinal é muito bonita, tem o povo nativo que tem suas barracas na beira da praia, acho que podemos dizer que o turismo é uma das áreas de trabalho que mais da renda no municipio. </p>
            <p>&emsp;Aqui por ser um lugar tranquilo vem muita gente que pra descansar, não é um lugar de grandes festas, mais quem quer sossego acredito eu que aqui é um ótimo lugar.</p>
          </S.Text>
        </S.SectionOne>

       <S.SectionTwo>
          <img src={Praia} alt="eu" />
          <S.TextOne>
            <h2>Sobre mim!!</h2>
            <p>&emsp;Meu tempo livre eu gosto de aproveitar com meus amigos, jogar bola, futevôlei, video game, sair pra lanchar e conversar, tambem gosto muito de conversar com meu tio sobre programação pelo tempo de experiência que ele tem eu aprendo bastante com ele, mais nem sempre dá, as vezes os horários não batem, e quando não batem eu gosto de jogar video game sozinho, as vezes revejo meus codigos antigos pra saber o quanto evoluir, e quando tem algo pendente eu aproveito esse tempo para completar.</p>
            <p>&emsp;É tambem eu gosto de escutar musica quando estou fazendo as coisas e no meu tempo livre, me ajuda a me concentrar, mais tambem consigo me concentrar sem.</p>
            <p>
            &emsp;Aprendo com mais facilidade lendo do que assistindo, tenho uma boa comunicação mais ao mesmo tempo tenho vergonha de da minha opinião, entendo melhor quando converso ao invés de só escutar, porque mesmo não sendo uma duvida eu vou falar oque eu entendi e assim fico mais confiante para fazer, gosto de conversar com pessoas experientes, é uma forma de adquirir   conhecimento.
            </p>
            <p>&emsp;Acredito que estou pronto para entrar no mercado, tenho facilidade para aprender e para se adaptar a algo novo.</p>
          </S.TextOne>
        </S.SectionTwo> 


      </S.Main>
    </S.Body>
  )
}

export default Sobre
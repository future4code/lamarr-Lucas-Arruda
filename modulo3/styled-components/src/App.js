import React from 'react';
import { Footer, Header, Container, Colunas, Principal, Main, RoundedInput, NovaMensagem, ArrayMensagem } from "./style";
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';


const GlobalStyle = createGlobalStyle`

  *, body {
    margin: 0;
    padding: 0;
  }

`



function App() {

const [receberMensagem, setReceberMensagem] = useState('')
const [receberRemetente, setReceberRemetente] = useState('')
const [arrayInicial, setArrayInicial] = useState([])

const novoArray = arrayInicial.map((elemento, index)=>{
  return (
    <NovaMensagem key={index}>
      <p>{elemento.nome}</p>
      <span>{elemento.msg}</span>
    </NovaMensagem>
  )
}) 


const addMensagem = (e) =>{
  e.preventDefault();
const novaMensagem = {nome:receberRemetente, msg:receberMensagem}

const novoArray = [...arrayInicial, novaMensagem]

setArrayInicial(novoArray)
setReceberRemetente('')
setReceberMensagem('')

}





  return (
    <Container>
      <GlobalStyle/>
      <Header>
        <img src='https://avatars.githubusercontent.com/u/53058090?s=280&v=4' alt='imagem'/>
        <h1>LabZap</h1>
      </Header>
      <Main>
        <Colunas/>
        <Principal>
          <ArrayMensagem>
          {novoArray}
          </ArrayMensagem>
          <RoundedInput>
            <label>Remetente: </label>
                <input onChange={(e)=>{setReceberRemetente(e.target.value)}} value={receberRemetente}/> 

            <label>Msg: </label>
                <input onChange={(e) =>{setReceberMensagem(e.target.value)}} value={receberMensagem} />
                <button onClick={addMensagem}>Enviar Mensagem</button>
                </RoundedInput>
                
        </Principal>
        <Colunas/>

        
      </Main>
     
      <Footer>
        <p>Copyright © 2022 Lucas Ferreira. All rights reserved. Travessa Aguia Branca, Duque de Caxias, Rio de Janeiro. CEP 25260-110</p>
      </Footer>
    </Container>
  );
}

export default App;

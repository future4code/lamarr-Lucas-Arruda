import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Container,Header, Main, Colunas, Principal, Footer } from './style';


const GlobalStyle = createGlobalStyle`

  *, body {
    margin: 0;
    padding: 0;
  }

`


function App() {
  return (
    <Container>
      <GlobalStyle/>
      <Header>
        <img src='https://avatars.githubusercontent.com/u/53058090?s=280&v=4'/>
        <h1>
          WhatsLab
        </h1>
      </Header>
      <Main>
        <Colunas/>
        <Principal>
          <div className='rounded-input'>
            <label>Remetente: </label>
                <input className='remetente' type="text" /> 

            <label>Msg: </label>
                <input className='mensagem' type="text" />
                <button>Enviar Mensagem</button>
                </div>
                
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

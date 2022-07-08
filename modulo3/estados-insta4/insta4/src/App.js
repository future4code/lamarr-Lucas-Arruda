import React, { useState } from 'react';
import Post from './components/Post/Post';
import { MainContainer, GlobalStyle, Form} from './style';





function App() {

const [listagem, setListagem] = useState ([
  {nomeUsuario: 'j040', fotoUsuario:'https://cdn.dicionariopopular.com/imagens/imagem-de-perfil-gato.jpg', fotoPost: 'https://live.apto.vc/wp-content/uploads/2022/01/setup-gamer.jpg'},
  {nomeUsuario: 'luxcasf', fotoUsuario: 'https://i0.wp.com/emotioncard.com.br/wp-content/uploads/2016/05/perfil-whatsapp.jpg?fit=600%2C600&ssl=1', fotoPost: 'https://i.pinimg.com/originals/db/0b/b7/db0bb7f339bf3aef6641af084c91b3a7.jpg'},
  {nomeUsuario: 'r4fa', fotoUsuario: 'https://cdn.dicionariopopular.com/imagens/fotoengracada-de-perfil-micao-jackson2.jpg', fotoPost: 'https://gtprogamer.com.br/wp-content/uploads/2021/12/Game-Room-Ideas-For-Small-Rooms.jpg'}

])

// eventos

// const handleInputNome = (evento) => {
//   evento.target.value

// }

// const handleInputPerfil = (evento) => {
//   evento.target.value
// }

// const handleInputPostagem = (evento) => {
//   evento.target.value
// }

let listagemGeral=listagem.map((e, i)=>{
  return (
    <li key={i}>
      <Post
        nomeUsuario={e.nomeUsuario}
        fotoUsuario={e.fotoUsuario}
        fotoPost={e.fotoPost}
      />
    </li>
  )
      
})

console.log(listagemGeral)

return(
  <MainContainer>
      <GlobalStyle/>

      {/* A linha de codigo abaixo nao ficou definida, até o momento da entrega do trabalho. */}
      {/* <Form>
        <label>Usuário:</label>
        <input 
            placeholder='Insira o seu Usuário'
            onChange={handleInputNome}
            value
           />
        
        <label>Url de Perfil:</label>
        <input
            placeholder='Insira a sua imagem de Pefil'
            onChange={handleInputPerfil}
            value
          />

        <label>Url de imagem de Postagem:</label>
        <input
            placeholder='Insira a sua nova Postagem'
            onChange={handleInputPostagem}
            value
          />
      </Form>
      <button>Adiciona</button> */}

      {listagemGeral}
  
  </MainContainer>
  
)

}


export default App;

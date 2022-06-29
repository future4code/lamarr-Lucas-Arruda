import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'j040'}
            fotoUsuario={'https://cdn.dicionariopopular.com/imagens/imagem-de-perfil-gato.jpg'}
            fotoPost={'https://live.apto.vc/wp-content/uploads/2022/01/setup-gamer.jpg'}
          />
           <Post
            nomeUsuario={'luxcas'}
            fotoUsuario={'https://i0.wp.com/emotioncard.com.br/wp-content/uploads/2016/05/perfil-whatsapp.jpg?fit=600%2C600&ssl=1'}
            fotoPost={'https://i.pinimg.com/originals/db/0b/b7/db0bb7f339bf3aef6641af084c91b3a7.jpg'}
          />
           <Post
            nomeUsuario={'r4fa'}
            fotoUsuario={'https://cdn.dicionariopopular.com/imagens/fotoengracada-de-perfil-micao-jackson2.jpg'}
            fotoPost={'https://gtprogamer.com.br/wp-content/uploads/2021/12/Game-Room-Ideas-For-Small-Rooms.jpg'}
          />
  </div>
  
)

}


export default App;

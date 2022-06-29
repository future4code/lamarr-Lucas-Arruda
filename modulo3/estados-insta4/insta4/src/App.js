import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://live.apto.vc/wp-content/uploads/2022/01/setup-gamer.jpg'}
          />
           <Post
            nomeUsuario={'luxcas'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://i.pinimg.com/originals/db/0b/b7/db0bb7f339bf3aef6641af084c91b3a7.jpg'}
          />
           <Post
            nomeUsuario={'rafa'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://gtprogamer.com.br/wp-content/uploads/2021/12/Game-Room-Ideas-For-Small-Rooms.jpg'}
          />
  </div>
  
)

}


export default App;

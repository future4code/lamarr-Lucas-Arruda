import React, {useState} from 'react'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { PostContainer, PostHeader, PostFooter, UserPhoto, PostPhoto  } from '../../style'




function Post(props){


  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(0)
  const [numeroComentarios, setNumeroComentarios] = useState(0)

  const onClickCurtida = () => {
    setCurtido(!curtido)
    if(!curtido){
      setnumeroCurtidas(numeroCurtidas+1)
    }
    else{
      setnumeroCurtidas(numeroCurtidas-1)
    }
    console.log('Curtiu!')
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }

  return(
    <PostContainer>
      <PostHeader>
        
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
        
      </PostHeader>

      
        <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>
        

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>

  )
  
}


export default Post
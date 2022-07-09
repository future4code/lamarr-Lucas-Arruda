import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

export const MainContainer = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`
export const GlobalStyle = createGlobalStyle`
  body {
    list-style: none;
  }


;
`
export const PostContainer = styled.div `
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
`

export const PostHeader = styled.div `
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`


export const PostFooter = styled.div ` 
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`

export const UserPhoto = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`
    
export const PostPhoto = styled.img`
    width: 100%;
`

export const IconContainer = styled.div `
    display: flex;
`

export const IconImage = styled.img `
	margin-right: 5px;
`

export const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`


export const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    
    label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }
`



import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;


`

export const Header = styled.header`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
       
        color: black;
    }
    
    img {
        width: 90px;
    }
`

export const Main = styled.main`
    display: flex;
    flex: 1;
    

`

export const Colunas = styled.div`
    background: orange;
    display: flex;
    width: 15%;
`

export const Principal = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: flex-end;
  

`
export const NovaMensagem = styled.div`
    display: flex;
    border: solid 1px;
    border-radius: 5px;
    min-width: 100px;
    padding: 15px;
    background: linear-gradient(rgb(234, 230, 223), rgb(209, 215, 219));
    flex-direction: column;
    max-width: 300px;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    margin: 35px;


    p{
        font-weight: 600;
        margin-bottom: 5px;

    }

    span{
        max-width: 85%;
    }

`

export const ArrayMensagem = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;

`

export const RoundedInput = styled.div`

    display: flex;
    justify-content: center;
    margin: 3px;
    
    button{
        width: 10rem;
        
    }

    label{
        margin: 0 10px;


    }
        
    input{
        margin-right: 20px;
        
    }
`





export const Footer = styled.footer`
    background-color:  #808080;
    color: black;
    display: flex;
    justify-content: center;
    padding: 0 10px;
    position: sticky;
    top: 100%;

    p {
        font-weight: bold;
    }

`
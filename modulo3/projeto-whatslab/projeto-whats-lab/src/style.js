import styled from "styled-components";

export const Colunas = styled.div`
    background: orange;
    display: flex;
    width: 15%;
`
export const Principal = styled.div`
    display: flex;
    width: 70%;
    align-items: flex-end;
    justify-content: center;
    
    

    .rounded-input{
        display: flex;
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
    }

    .mensagem{
        width: 30rem;
    }

    .remetente{
        width: 9rem;
    }

    
`

export const Main = styled.main`
    display: flex;
    flex: 1;

`

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;


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
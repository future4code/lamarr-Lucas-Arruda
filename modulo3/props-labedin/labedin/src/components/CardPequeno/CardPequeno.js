import React from 'react'
import './CardPequeno.css'

function CardPequeno (props) {
    return (
        <div className='contact'>
            <img src={ props.imagem }/>
            <h3> {props.contato} </h3>
            <p> {props.texto} </p>
        </div>
    )
}

export default CardPequeno
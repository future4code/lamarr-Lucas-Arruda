import styled from "styled-components";
import { Formulario1 } from "../style";

export function Etapa1() {
    return <Formulario1>
        <h1>Formulário</h1>
            <label> Qual o seu nome?
                <input type="text"/>
            </label>
            <label> Qual a sua idade?
                <input type="text" />
            </label>
            <label> Qual seu email?
                <input type="text"/>
            </label>
            <label>Qual a sua escolaridade?
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                    </select> 
            </label>

    </Formulario1>
}
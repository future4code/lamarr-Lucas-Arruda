import { Formulario1 } from "../style";

export function Etapa1() {
    return <Formulario1>
        <h1>Formulário</h1>
            <label> 1. Qual o seu nome?</label>
                <input className="name" type="text"/>

            <label> 2. Qual a sua idade?</label>
                <input className="age" type="text" />
            
            <label> 3. Qual seu email?</label>
                <input className="email" type="text"/>
            
            <label className="seletor">4. Qual a sua escolaridade?
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                    </select> 
            </label>
        
    </Formulario1>
}
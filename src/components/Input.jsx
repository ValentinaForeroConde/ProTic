import React from 'react'
import {Label, GrupoInput, Inputs, LeyendaError, IconoValidacion,} from 'elements/Formularios';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const Input = ({user, placeholdercont, tipo, lenyenda, expresionRegular, name, estado, cambiarEstado}) => {
    const onChange = (e) =>{
        cambiarEstado({...estado, campo: e.target.value});
    }
    const validacion = () =>{
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: "true"});
            } else{
                cambiarEstado({...estado, valido: "false"});
            }
        }
    }
    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}>{user}</Label>
            <GrupoInput>
                <Inputs
                    type={tipo}
                    placeholder={placeholdercont}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
                <IconoValidacion
                icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                valido={estado.valido}/>
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{lenyenda}</LeyendaError>
        </div>
    )
}

export default Input;

import React from 'react'
import {Label, GrupoInput, Inputs, LeyendaError, IconoValidacion,} from 'elements/Formularios';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const Input = ({user, placeholdercont, tipo, lenyenda, expresionRegular, name}) => {
    return (
        <div>
            <Label htmlFor={name}>{user}</Label>
            <GrupoInput>
                <Inputs type={tipo} placeholder={placeholdercont} id={name}/>
                <IconoValidacion icon={faCheckCircle}/>
            </GrupoInput>
            <LeyendaError>{lenyenda}</LeyendaError>
        </div>
    )
}

export default Input;

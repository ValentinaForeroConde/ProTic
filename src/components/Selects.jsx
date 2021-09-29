import React from 'react'
import {Label, GrupoInput, LeyendaError, IconoValidacion,} from 'elements/Formularios';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select';

const Selects = ({user, placeholdercont, tipo, lenyenda, expresionRegular, name, estado, cambiarEstado, opciones}) => {
    const onChange = ({selectedOption})=>{
        cambiarEstado({...estado, campo: selectedOption});
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
                <Select
                    type={tipo}
                    placeholder={placeholdercont}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                    options={opciones}
                    className="selectlist"
                />
                <IconoValidacion
                icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                valido={estado.valido}/>
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{lenyenda}</LeyendaError>
        </div>
    )
}

export default Selects

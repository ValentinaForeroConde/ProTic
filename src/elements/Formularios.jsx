import styled from "styled-components";

const colores ={
    borde : "#0075FF",
    error : "#bb2929",
    exito : "#1ed12d"
}

const Formulario = styled.form`
    display : grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media(max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.form`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px

`;
export {Formulario};
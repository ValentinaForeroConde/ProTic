import styled from "styled-components";

const Table = styled.table`
width: 100%;
margin: 0;
border-spacing: 0;
border-collapse: collapse;
`;

const TableHead = styled.thead`
font-size: 4vh;
font-weight: bold;
text-align: left;
padding 2;
}
`;

const TableData = styled.td`
font-size: 3vh;
border: 1px solid LightGrey;
height: 100%;
text-align: center;
vertical-align: middle;
}

`;

const TableDataGrey = styled.td`
font-size: 3vh;
color: LightGrey;
border: 1px solid LightGrey;
text-align: center;
vertical-align: middle;
}
`;
const ContenedorBotonCentrado = styled.div`
    display: block;
    text-align: right;

`;
const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 15%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    transition: .1s ease all;
    cursor: pointer;
    &:hover {
        box-shadow: 3px 0px 30px rgba(163,163,163, 1)
    }
    @media(max-width: 800px){
        font-size: 0.8rem;
        width: 30%
    }
`;

export{
    Table,
    TableHead,
    TableData,
    TableDataGrey,
    ContenedorBotonCentrado,
    Boton,
}


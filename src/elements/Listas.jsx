import styled from "styled-components";

const Table = styled.table`
width: 100%;
overflow-y: scroll;
grid-column: span 2;
@media (max-width:800px){
      display: none;
}
`;

const TableHead = styled.thead`
background-color: #023047;
color: white;
padding-top: 12px;
padding-bottom: 12px;
text-align: left;

`;
const TableRow = styled.tr`
&:nth-child(even){
    background-color: #d3d3d3c2;
}
&:hover { 
    background-color: #ddd;
  cursor: pointer;
}
`;
const TableData = styled.td`
padding: 8px;
border: 1px solid #ddd;

`;

const ContenedorBotonCentrado = styled.div`
    display: block;
    text-align: right;

`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 15%;
    margin:20px;
    background: #023047;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 10px;
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
const ContenedorEstado = styled.div`

grid-column: span 2;
@media (max-width: 800px){
    width: 50%;
    grid-column: span 1;

}
`;
const ContenedorCardTabla = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 50px;
    @media (min-width:800px){
        display: none;
        grid-column: span 1;
    }
}
`;
const ContenidoResponsive = styled.div`
    background-color: rgb(187, 186, 186);
    margin: 5px;
    display: flex;
    flex-direction: row;
    padding: 3px;
    border-radius: 15px;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    &:hover { 
        background-color: rgb(132, 132, 138);
        cursor: pointer;
        border-radius: 15px;
        }
}  
`;
const InfoCard = styled.div`
    width: 100%;
    span{
        display: flex;
        flex-direction: row;
    }
}  
`;
const ActualizarCard = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
}  
`;
export{
    Table,
    TableHead,
    TableData,
    TableRow,
    ContenedorBotonCentrado,
    Boton,
    ContenedorEstado,
    ContenedorCardTabla,
    ContenidoResponsive,
    InfoCard,
    ActualizarCard
}


import styled from "styled-components"

export default function LegendSeats(){
    return(
        <Legend>
            <ul><div style={{backgroundColor: "#8DD7CF"}}> </div> <li>Selecionado</li></ul>
            <ul><div style={{backgroundColor: "#C3CFD9"}}> </div> <li>Disponível</li></ul>
            <ul><div style={{backgroundColor: "#FBE192"}}> </div> <li>Indisponível</li></ul>
        </Legend>
    )
}


const Legend = styled.div`
    width: 100%;
    flex-wrap: wrap;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-right: 20px;
    }

    div {
        height: 26px;
        width: 26px;
        border-radius: 12px;
        margin-bottom: 2px;
        border: 1px solid #C3CFD9;
    }

    li {
        font-size: 13px;
        letter-spacing: -0.013em;   
        color: #4E5A65;
        margin-bottom: 40px;
    }
`
import Information from "./Information";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Success() {
    const location = useLocation();
    const cpf = () => formataCPF(location.state.informPost.cpf);
    return (

        <>
         <Information> <Mensage> Pedido feito com sucesso! </Mensage></Information>
            <Main>
                <Container> 
                    <div>
                        <p> Filme e sessão </p>
                        {location.state.inform.movie.title}
                        {location.state.inform.movie.date} {location.state.inform.name}
                    </div>
                    <div>
                        <p> Ingressos </p>
                        {(location.state.nameClick).map((click, index)=> <li key={index}> Assento {click}</li>)}

                    </div>
                    <div>
                        <p> Comprador </p>
                        <li> Nome : {location.state.informPost.name}</li>
                        <li> CPF: {cpf()}</li>
                    </div>
                </Container>
                <Link to="/"><Button> Voltar para Home </Button></Link>
            </Main>
        </>
    )

}

function formataCPF(cpf){ cpf = cpf.replace(/[^\d]/g, ""); return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); }

const Mensage = styled.p`
    font-weight: 700;
    line-height: 28px;
    font-size: 24px;
    color: #247A6B;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    margin-left: 28px;
    letter-spacing: 0.04em;


    p{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        margin-bottom: 5px;
        width: 100%;
        text-align: start;
    }

    li {
        width: 100%;
        text-align: start;
    }

    div {
        margin-bottom: 30px;
    }

`

const Button = styled.button`
    margin-top: 40px;
    border: none;
    width: 225px;
    height: 42px;
    line-height: 21px;
    font-size: 18px;    
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;

`

const Main = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
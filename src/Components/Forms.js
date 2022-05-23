import styled from "styled-components";

export default function Forms() {
    return (


        <Form onSubmit={fazerLogin}>
            <label htmlFor="name">Nome do comprador:</label>
            <input id="nome" type="text" htmlFor="nome" placeholder="Digite seu nome..." required />
            <label>CPF do comprador:</label>
            <input id="cpf" htmlFor="cpf" type="text" placeholder="Digite seu CPF..." required />
            <Submit>Reservar assento(s)</Submit>
        </Form>


    )
}

function fazerLogin (event) {
    event.preventDefault(); // impede o redirecionamento
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    label {
        font-size: 18px;
        color: #293845;
        margin-bottom: 2px;
        width: 100%;
        text-align: start;
    }

    input {
        font-size: 18px;
        line-height: 21px;
        width: 100%;
        height: 50px;
        margin-bottom: 7px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding: 18px;
    }
`

const Submit = styled.button`
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
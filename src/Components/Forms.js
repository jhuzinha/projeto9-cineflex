import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Forms({ clicked, inform, nameClick }) {
    const [Nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const navigate = useNavigate();


    const informPost = {
        ids: clicked,
        name: Nome,
        cpf
    }

    function fazerLogin(event) {
        event.preventDefault();
        if (informPost.ids.length === 0){
            return(
                alert("preencha pelo menos um (1) assento")
            )
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", informPost)
        promise.then(() =>
            {console.log(nameClick)
                navigate("/sucesso", {state: {inform: inform, nameClick: nameClick, informPost: informPost}})
            }
        )
    }


    return (
        <Form onSubmit={(e) => fazerLogin(e)}>
            <label htmlFor="name">Nome do comprador:</label>
            <input id="nome" type="text" htmlFor="nome" placeholder="Digite seu nome..." required onChange={e => setNome(e.target.value)} />
            <label>CPF do comprador:</label>
            <input id="cpf" htmlFor="cpf" type="text" pattern="[0-9]{11}" placeholder="Digite seu CPF..." maxLength={11} minLength={11} required onChange={e => setCPF(e.target.value)} />
            <Submit onClick={() => console.log(clicked)}>Reservar assento(s)</Submit>
        </Form>
    )
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
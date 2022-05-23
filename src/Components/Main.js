import styled from "styled-components";
import Information from "./Information";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Loading from "../Assets/images/loading.gif";


export default function Main(){
        
    // LOGIC 
    const [films, setFilms] = useState([]);

    
    useEffect( () => {
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        
        request.then(ansewr => {
            setFilms(ansewr.data)})
    }, [])
    
    
    
    // UI
    return(
    <>
    { films.length === 0? <> <Spacing></Spacing> <Information> <img src={Loading} alt="Carregando..." /></Information></> : 
    <div>
        <Information> Selecione o filme </Information>
        <Container>
            {films.map((film, index) => 
            <div key= {index}> 
                <Link to={`/sessao/${film.id}`}> <img src={film.posterURL} alt="imagem do filme" /> </Link>
            </div>)}
        </Container>
    </div>
    }
    </>)
}


const Container = styled.div` 
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
    height: auto;
    margin: 0 20px 20px 0;

    div {
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin-bottom: 11px;

    }

    img {
        height: 193px;
        width: 129px;
        margin: 8px;
    }
`

const Spacing = styled.div` 
    width: 100%;
    height: 200px;
    margin-bottom:  180px;
`
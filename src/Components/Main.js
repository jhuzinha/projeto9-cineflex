import styled from "styled-components";
import Information from "./Information";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Main(){
        
    // LOGIC 
    const [films, setFilms] = useState([]);

    const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
    
    useEffect( () => {
    request.then(ansewr => {
        setFilms([...ansewr.data])})
    }, [])
    
    
    
    // UI
    return(
    <>
        <Information> Selecione o filme </Information>
        <Container>
            {films.map((film, index) => 
            <div key= {index}> 
                <Link to={`/sessao/${film.id}`}> <img src={film.posterURL} /> </Link>
            </div>)}
        </Container>
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
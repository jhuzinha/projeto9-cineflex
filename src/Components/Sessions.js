import styled from "styled-components";
import Information from "./Information";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useState } from "react";
import axios from "axios";

export default function Sessions(){
    const {idFilm} = useParams()
    
    const [sessions, setSessions] = useState([])
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`)

    useEffect( () => {
        promise.then(ansewr => {
            setSessions([...ansewr.data])})
            console.log(sessions)
        }, [])

    return (
        <>
        <Information> Selecione o horário </Information>
        {sessions.map((film, index) => 
            <div key= {index}> 
                <Link to={`/sessao/${film.id}`}> <img src={film.posterURL} /> </Link>
            </div>)}
        </>
    )
}

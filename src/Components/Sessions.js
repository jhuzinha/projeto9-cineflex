import styled from "styled-components";
import Information from "./Information";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import Loading from "../Assets/images/loading.gif";

export default function Sessions(){
    const {idFilm} = useParams()
    
    const [sessions, setSessions] = useState([])
    const [image, setImage] = useState([])

    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilm}/showtimes`)

        promise.then(ansewr => {
            setSessions(ansewr.data.days)
            setImage(ansewr.data)
        })
        }, [])

    return (
        <>
        { sessions.length === 0? <> <Spacing></Spacing> <Information> <img src={Loading} alt="Carregando..." /></Information> </> : 
        <div>
            <Information> Selecione o horário </Information>
            {sessions.map((film) => 
                <div key={film.id}> 
                <Days> {film.weekday} - {film.date} </Days> 
                <Hour> { (film.showtimes).map((time) => <Link to={`/assentos/${time.id}`} key={time.id}> <button> {time.name} </button> </Link>) } </Hour>
                </div>)}    
                <Spacing></Spacing>
            <Footer> 
                { image.length !== 0 && <ContentsFooter key={image.id}> <div><img src={image.posterURL} alt="" /></div> {image.title}</ContentsFooter> 
                }
            </Footer> 
        </div>
        }
        </>
    )
}


const Days = styled.div `
    font-size: 18px;
    line-height: 21px;
    margin-left: 24px;
    margin-bottom: 10px;

`

const Hour = styled.div`
    display: flex;
    margin-left: 24px;
    
    button { background-color: #E8833A;
    border-radius: 3px;
    border: none;
    height: 43px;
    width: 83px;
    margin: 13px 8px 23px 0px;
    color: white;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    }
`

const Spacing = styled.div`
    width: 100%;
    height: 180px;
    margin-bottom:  180px;
`

const ContentsFooter = styled.div`
    display: flex;
    align-items: center;
     
    div {
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin: 14px 10px 14px 14px;
        width: 72px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    
    img {
        height: 89px;
        width: 64px;
        margin: 8px;
    }

`
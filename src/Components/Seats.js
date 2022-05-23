import Footer from "./Footer";
import Information from "./Information";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import LegendSeats from "./LegendSeats";
import Loading from "../Assets/images/loading.gif";
import Forms from "./Forms";

export default function Seats() {
    const { idSessions } = useParams();
    const [seat, setSeat] = useState([]);
    const [inform, setInform] = useState([]);
    const [clicked, setClicked] = useState([]);
    const [nameClick, setnameClick] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessions}/seats`);

        promise.then(response => {
            setSeat(response.data.seats);
            setInform(response.data);
        });
    }, [])

    return (
        <>
            {seat.length === 0 ? <> <Spacing></Spacing> <Information><img src={Loading} alt="Carregando..." /></Information> </> :
                <Center>
                    <Information> Selecione o(s) assento(s): </Information>
                    <Container>
                        {seat.map((s, index) => <div key={index}> {!s.isAvailable ? <ChairD cor={"#FBE192"} borda={"#F7C52B"}>{s.name}</ChairD> :
                            clicked.includes(s.id) ? 
                            <ChairD cor={"#8DD7CF"} borda={"#45BDB0"} onClick={() => {setClicked((clicked)=> clicked.filter((click)=> click !== s.id)); setnameClick((nameClick)=> nameClick.filter((click)=> click !== s.name))}}>{s.name}</ChairD> : 
                            <ChairD cor={"#C3CFD9"} borda={"#808F9D"} onClick={() => {setClicked([...clicked, s.id]); setnameClick([...nameClick, s.name])}}>{s.name}</ChairD>}</div>)}
                        
                        
                        <LegendSeats />

                        <Forms clicked = {clicked} inform = {inform} nameClick = {nameClick}/>

                        <Spacing></Spacing>

                    </Container>


                    <Footer>  {inform.length !== 0 && <ContentsFooter key={inform.id}> <div><img src={inform.movie.posterURL} alt="" /></div> <li>{inform.movie.title} <p>{inform.day.weekday} - {inform.name}</p></li></ContentsFooter>
                    }</Footer>
                </Center>
            }
        </>
    )
}

const Center = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

`

const Container = styled.div`
    display: flex;
    flex-wrap:  wrap;  
    padding: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 347px;
    height: 230px;
    text-align: center;


    && > div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 6px;
        margin-bottom: 18px;
    }
`

const ChairD = styled.li`
    background-color: ${(props) => props.cor};
    border: 1px solid ${(props) => props.borda};
    border-radius: 12px;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    height: 26px;
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
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
const Spacing = styled.div`
    width: 100%;
    height: 180px;
    margin-bottom:  180px;
`
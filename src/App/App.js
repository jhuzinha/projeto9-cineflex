import Sessions from "../Components/Sessions"
import Header from "../Components/Header"
import Main from "../Components/Main"
import Seats from "../Components/Seats"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App(){
    
    return(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path= "/" element = {<Main />}/>
            <Route path="/sessao/:idFilm" element = {<Sessions />}/>
            <Route path="/assentos/:idSessions" element = {<Seats />}/>
            <Route path="/sucesso/:idSuccess"/>
        </Routes>
    </BrowserRouter>
    )
}
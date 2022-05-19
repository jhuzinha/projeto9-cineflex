import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Main from "../Components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App(){
    
    return(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path= "/" element = {<Main />}/>
            <Route path="/filme/:idFilm"/>
            <Route path="/sessao/:idSessions" />
            <Route path="/sucesso/:idSuccess" />
        </Routes>
    </BrowserRouter>
    )
}
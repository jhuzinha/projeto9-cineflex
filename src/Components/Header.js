import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";
import styled from "styled-components";

export default function Header(){
    const navigate = useNavigate();
    
    function handleClick() {
        navigate(-1)
      }
    
    
    return(
        <>
        <Menu>
            <div> CINEFLEX </div>
           { handleClick === "undefined"? <></> : <ion-icon onClick = {handleClick} name="return-down-back-outline"></ion-icon>}
        </Menu>
        </>
    )
}

const Menu = styled.header`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    div {
        background-color: #C3CFD9;
        color: #E8833A;
        font-size: 34px;
        height: 67px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
        position:  fixed;
        top: 0;
        left: 0;
    }

    ion-icon{
        position: fixed;
        background-color: rgba(101, 100, 111, 0.1);
        border-radius: 5px;
        width: 45px;
        font-size: 25px;
        left: 6px;
        top: 18px;
    }
    && ion-icon:hover{
        background-color: #E8833A;
    }

`
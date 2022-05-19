import styled from "styled-components"

export default function Header(){
    return(
        <>
        <Menu> CINEFLEX </Menu>
        </>
    )
}

const Menu = styled.header`
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
`
import styled from "styled-components"

export default function Footer({children}){
    return (
        <>
            <Footnote>
                {children}    
            </Footnote>
        
        </>
    )
}

const Footnote = styled.footer`
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    height: auto;
    width: 100%;
    font-size: 26px;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`


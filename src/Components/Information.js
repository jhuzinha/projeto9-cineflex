import styled from "styled-components";

export default function Information({children}){
    return(
        <>  
            <Spacing></Spacing>
            <Word> {children} </Word>
        </>
    )

}

const Word = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:  24px;
    height: 90px;
    text-align: center;
    line-height: 28px;
    width: 100%;
    
`

const Spacing = styled.div`
    margin-top: 67px;
`
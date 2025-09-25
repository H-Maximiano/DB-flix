import styled from "styled-components";

export const Main = styled.div`
background-color: black;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`


export const Perfil = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const Img = styled.img`
height: 50%;
border-radius: 20px;
margin-bottom: 10px;
cursor: pointer;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}

`


export const Name = styled.h3`
color: aliceblue;
font-size: 20px;
`
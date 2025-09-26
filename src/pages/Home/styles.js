import styled from "styled-components";

export const Main = styled.div`
display:flex;
background: linear-gradient(135deg, #000000ff, #0f0031ff );
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}   

`


export const Perfil = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 40px;

`
export const Img = styled.img`

height: 20vh;
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
export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

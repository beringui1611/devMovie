import styled from "styled-components";

export const Container = styled.div`
background: #000;
width: 70%;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
padding: 50px;
max-width: 1200px;
iframe{
    border: none;
}

`

export const Background = styled.div`
z-index: 99;
height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,0.7);
position: absolute;
display: flex;
align-items: center;
justify-content: center;


`



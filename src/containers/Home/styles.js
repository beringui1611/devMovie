import styled from "styled-components";

export const Container = styled.div`
background-image:url(${(props) => props.img});
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
max-width: 100vw;
&::before{
    content:" ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}
`

export const Info = styled.div`
z-index: 2;
padding: 20px;
width:50%;
h1{
    font-size: 4rem;
    font-weight: 700;
    color: #ffffff;
}

p{
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;

}

div{
    display: flex;
    gap: 20px;
}
`

export const Poster = styled.div`
    z-index: 3;
img{
    width: 400px;
    border-radius: 30px;

}
`

export const ContainerItens = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 100%;
max-width: 1500px;

`
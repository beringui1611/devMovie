import styled from "styled-components";

export const Container = styled.div`
z-index: 99;
position: fixed;
top: 0;
padding: 10px 50px;
display: flex;
justify-content:space-between;
align-items: center;
min-height: 90px;
background-color: ${(props) => props.changeBackGround ? '#000' : 'transparent'};
transition: background-color 1s ease-in-out;
img{
    width: 25%;
}
`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 20px;
`

export const Li = styled.li`
color: #fff;
font-weight: 600;
cursor: pointer;

a{
    text-decoration: none;
    color: #ffff;
    font-size: 25px;

}


&::after{
    content: '';
    height: 3px;
    width: ${(props)=> props.isActive ? '10%' : 0};
    background-color: #ff0000;
    position: absolute;
    bottom: -10px;
left: 50%;
transform: translateX(-50%);
transition: width 0.5s ease-in-out;

}

&:hover::after{
    width: 100%;
}

`


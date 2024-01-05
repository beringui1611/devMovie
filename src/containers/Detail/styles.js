import styled from "styled-components";

export const Container = styled.div``

export const Background = styled.div`
background-image:url(${(props) => props.image});
height: 50vh;
background-position: center;
background-size: cover;
`

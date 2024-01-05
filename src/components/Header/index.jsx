import React, { useState } from "react";
import { Container, Menu, Li} from "./styles";
import { Link, useLocation} from "react-router-dom";
import logo from '../../assets/logo.png'

function Header(){

    const {pathname} = useLocation()

    const [changeBackGround, setChangeBackGround] = useState(false)

    window.onscroll = () =>{
    window.pageYOffset > 150 ? setChangeBackGround(true) : setChangeBackGround(false)
    }
  

   

    return (
        <Container changeBackGround={changeBackGround}>
            <img src={logo} alt="logo"/>
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Series</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header
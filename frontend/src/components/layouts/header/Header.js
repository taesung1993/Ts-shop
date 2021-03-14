import React from 'react'
import jsonFromHeader from "./Header.json";
import {Container, Inner, InnerCol, InnerLink, Favorites, LogoContainer, Logo, TabMenu, MenuItem, IconContainer, FontAwesomeIcon, } from "../../../styles/components/layout/header/HeaderStyle";

const { inner: {linkColumn},
        tabMenu: {tabMenuItems}
    } = jsonFromHeader;

const Header = () => {
    return (
        <Container>
            <Inner>
                <InnerCol kinds="snsColumn">
                    <IconContainer>
                        <FontAwesomeIcon className="fab fa-instagram"/>
                    </IconContainer>
                    <IconContainer>
                        <FontAwesomeIcon className="fab fa-facebook-square"/>
                    </IconContainer>
                    <IconContainer>
                        <FontAwesomeIcon className="fab fa-twitter-square"/>
                    </IconContainer>
                    <IconContainer order={"last"}>
                        <FontAwesomeIcon className="far fa-envelope"/>
                    </IconContainer>
                </InnerCol>
                <InnerCol kinds="linkColumn">
                    {linkColumn.map(({name, path}, idx) => 
                        path !== null ? 
                            <InnerLink to={path} key={idx} 
                            order={idx === linkColumn.length-1 ? "last" : "noLast"}>{name}</InnerLink>
                            :
                            <Favorites key={idx}>{name}</Favorites>
                    )}
                </InnerCol>
            </Inner>
            <LogoContainer>
                <Logo src={'/images/logo/logo.png'}/>
            </LogoContainer>
            <TabMenu menuLen={tabMenuItems.length}>
                {
                    tabMenuItems.map(({name, path}, idx) => <MenuItem key={name+idx} to={path}>{name}</MenuItem>)
                }
            </TabMenu>
        </Container>
    )
}

export default Header

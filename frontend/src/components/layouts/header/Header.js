import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import {colors} from "../../../styles/colors";
import jsonFromHeader from "./Header.json";

const Container = styled.header`
`;

const Inner = styled.div`
    height: 50px;
    border-bottom: 1px solid ${colors.lineColor};
    display: flex;
    padding: 0 50px;
    color: ${colors.grey};
`; 

const InnerCol = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${({kinds}) => kinds === "linkColumn" ? "flex-end" : "flex-start"};
    align-items: center;
`;

const InnerLink = styled(Link)`
    margin-right: ${({order}) => order === "last" ? 0 : "10px"};
    &:hover{
        color: ${colors.black};
    }
`;

const Favorites = styled.div`
    cursor: pointer;
    margin-right: 10px;
    &:hover{
        color: ${colors.black};
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid ${colors.lineColor};
`;

const Logo = styled.img`
    width: 120px;
    height: 120px;
`;

const TabMenu = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${colors.lineColor};
    padding: 0 20%;
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.menuLen}, 1fr)`};
`;

const MenuItem = styled(Link)`
    justify-self: center;
    align-self: center;
`;

const IconContainer = styled.span`
    display: block;
    margin-right: ${({order}) => order === "last" ? 0 : "10px"};
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid ${colors.lineColor};
    position: relative;
    cursor: pointer;
    &:hover{
        color: ${colors.black};
        border-color: ${colors.black};
    }
`;

const FontAwesomeIcon = styled.i`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.3rem;
`;

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

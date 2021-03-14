import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import {colors} from "../../styles/colors";

const Container = styled.header`
`;

const Inner = styled.div`
    height: 50px;
    background-color: #4b4b4b; 
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


const menus = [
    {
        name: 'OUTER',
        path: "/categories/outer"
    },
    {
        name: 'TOP',
        path: "/categories/top"
    },
    {
        name: 'PANTS',
        path: '/categories/pants'
    },
    {
        name: 'SHIRTS',
        path: '/categories/shirts'
    },
    {
        name: 'SHOES',
        path: '/categories/shoes'
    },
    {
        name: 'BAG',
        path: '/categories/bag'
    },
    {
        name: 'ACC',
        path: '/categories/acc'
    }
];

const Header = () => {
    return (
        <Container>
            <Inner></Inner>
            <LogoContainer>
                <Logo src={'/images/logo/logo.png'}/>
            </LogoContainer>
            <TabMenu menuLen={menus.length}>
                {
                    menus.map(({name, path}, idx) => <MenuItem key={name+idx} to={path}>{name}</MenuItem>)
                }
            </TabMenu>
        </Container>
    )
}

export default Header

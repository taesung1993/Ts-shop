import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import {colors} from "../../styles/colors";

const Container = styled.header`
`;

const Inner = styled.div`
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
`; 

const InnerCol = styled.div`
    align-self: center;
    justify-self: ${({order}) => order === "second" ? "center" : 
                                 order === "last" ? "end" : "start"};
`;

const Logo = styled.img`
    width: 80px;
    height: 80px;
`


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
            <Inner>
                <InnerCol>
                <div>FIRST</div>
                </InnerCol>
                <InnerCol order={"second"}>
                    <Logo src={'/images/logo/logo.png'}/>
                </InnerCol>
                <InnerCol order={"last"}>
                    <div>LAST</div>
                </InnerCol>
            </Inner>
        </Container>
    )
}

export default Header

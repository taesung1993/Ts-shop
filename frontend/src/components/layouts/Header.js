import React from 'react'
import styled from "styled-components";
import {colors} from "../../styles/colors";

const Container = styled.header`
`;

const Inner = styled.div`
    height: 40px;
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

const Header = () => {
    return (
        <Container>
            <Inner></Inner>
            <LogoContainer>
                <Logo src={'/images/logo/logo.png'}/>
            </LogoContainer>
        </Container>
    )
}

export default Header

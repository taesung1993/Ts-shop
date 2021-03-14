import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import {colors} from "../../styles/colors";

const Container = styled.header`
`;

const Inner = styled.div`
    height: 50px;
    border-bottom: 1px solid ${colors.lineColor};
`; 

const InnerCol = styled.div``;

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
    margin-right: ${({order}) => order === "last" ? 0 : "10px"};
`;

const FontAwesomeIcon = styled.i`
    transform: scale(1.4);
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
            <Inner>
                <InnerCol>
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
                <InnerCol>
                    <div><span>즐겨찾기</span></div>
                    <div><span>회원가입</span></div>
                    <div><span>로그인</span></div>
                    <div><span>주문하기</span></div>
                    <div><span>장바구니</span></div>
                </InnerCol>
            </Inner>
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

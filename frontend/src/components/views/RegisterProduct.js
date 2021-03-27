import React from 'react';
import styled from "styled-components";
import {colors} from "styles/config/colors"

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.header`
    width: 70vw;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
`;

const TitleContainer = styled.div`
    max-width: 900px;
    min-width: 65vw;
    border-left: 5px solid ${colors.black};
`;

const PageTitle = styled.span`
    font-size: 1.4rem;
    font-weight: 700;
    margin-right: 20px;
    padding-left: 20px;
`;
const PageExplanation = styled.span`
    opacity: 0.8;
    font-size: 1.4rem;
`;

const Main = styled.main`
    width: 70vw;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Card = styled.div`
    background-color: #ffffff;
    max-width: 900px;
    min-width: 65vw;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);
    border-radius: 5px;
    border: 1px solid ${colors.lineColor};
    padding: 10px;
`;

const CardTitle = styled.h3`
    font-size: 1.2rem;
`;

const RegisterProduct = () => {
    return (
        <Container>
            <Header>
                <TitleContainer>
                    <PageTitle>상품 등록</PageTitle>
                    <PageExplanation>새로운 상품을 업로드 합니다</PageExplanation>
                </TitleContainer>
            </Header>
            <Main>
                <Card>
                    <CardTitle>기본 정보 입력</CardTitle>
                </Card>
            </Main>
        </Container>
    )
}

export default RegisterProduct;

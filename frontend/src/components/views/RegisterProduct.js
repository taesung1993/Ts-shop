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
    margin: 25px 0;
`;

const TitleContainer = styled.div`
    border-left: 5px solid ${colors.black};
`;

const PageTitle = styled.span`
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: 20px;
    padding-left: 20px;
`;

const Main = styled.main`
    width: 70vw;
    padding-bottom: 50px;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
`;

const MainCol = styled.div`
    &:first-child{
        grid-column: 1/4;
    }
    &:last-child{
        grid-column: 4/5;
    }
`;

const Card = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);
    border: 1px solid ${colors.lineColor};
    margin-bottom: 15px;
`;

const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 500;
    padding: 15px;
    border-bottom : 1px solid ${colors.lineColor};
`;

const Label = styled.h1`
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 10px;
`;

const CardSection = styled.div`
    padding: 15px;
`;

const Select = styled.select`
    width: 100%;
`;
const Option = styled.option``;

const Input = styled.input`
    width: 100%;
    padding: 5px 10px;
`;

const UploadImageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
`;

const UploadImageBox = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border: 1px solid ${colors.lineColor};
    border-radius: 5px;
`;


const RegisterProduct = () => {
    return (
        <Container>
            <Header>
                <TitleContainer>
                    <PageTitle>상품 등록</PageTitle>
                </TitleContainer>
            </Header>
            <Main>
                <MainCol>
                    <Card>
                        <CardSection>
                            <Label>노출 상품명</Label>
                            <Input type="text"/>
                        </CardSection>
                        <CardSection>
                            <Label>이미지 등록</Label>
                            <UploadImageWrapper>
                                <UploadImageBox></UploadImageBox>
                                <UploadImageBox></UploadImageBox>
                                <UploadImageBox></UploadImageBox>
                            </UploadImageWrapper>
                        </CardSection>
                        <CardSection>
                            <Label>옵션 추가</Label>
                        </CardSection>
                    </Card>
                </MainCol>
                <MainCol>
                    <Card>
                        <Title>상품 카테고리 선택</Title>
                        <CardSection>
                            <Label>메인 카테고리</Label>
                            <Select>
                                <Option>카테고리를 선택해주세요</Option>
                                {
                                    ['OUTER', 'TOP', 'PANTS', 'SHIRTS', 'SHOES', 'BAG', 'ACC'].map((category, idx) => <Option key={idx} value={category}>{category}</Option>)
                                }
                            </Select>
                        </CardSection>
                        <CardSection>
                            <Label>서브 카테고리</Label>
                            <Select>
                                <Option>카테고리를 선택해주세요</Option>
                                {
                                    ['OUTER', 'TOP', 'PANTS', 'SHIRTS', 'SHOES', 'BAG', 'ACC'].map((category, idx) => <Option key={idx} value={category}>{category}</Option>)
                                }
                            </Select>
                        </CardSection>
                    </Card>
                    <Card>
                        <Title>상품 가격</Title>
                        <CardSection>
                            <Label>기본 가격</Label>
                            <Input type="number"/>
                        </CardSection>
                    </Card>
                </MainCol>
            </Main>
        </Container>
    )
}

export default RegisterProduct;

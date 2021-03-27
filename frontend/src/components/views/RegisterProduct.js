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

const RegisterStep = styled.span`
    opacity: 0.8;
    color: #1e90ff;
    margin-right: 5px;
`;

const PageExplanation = styled.span`
    opacity: 0.8;
    color: #1e90ff;
    font-size: 1.6rem;
`;

const Main = styled.main`
    width: 70vw;
    padding-bottom: 50px;
    padding: 0 20px;
    display: flex;
`;

const Card = styled.div`
    background-color: #ffffff;
    width: 100%;
    min-width: 500px;
    height: 100%;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);
    border-radius: 5px;
    border: 1px solid ${colors.lineColor};
    padding: 30px;
`;

const Label = styled.h1`
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 10px;
`;
const InputContainer = styled.div`
    padding: 0 10px;
    margin-bottom: ${(props) => props.order === "last" ? "10px" : "20px"};
`;
const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    font-size: 1.5rem;
    border: 1px solid ${colors.lineColor};
    border-radius: 5px;
    &:focus{
        outline: none;
        border: 1px solid #1e90ff;
        color: #1e90ff;
    }
`;

const Categories = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(50px, 150px));
    grid-gap: 15px;
    padding: 10px;
    justify-content: center;
    margin-bottom: 20px;
`;

const Category = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border: 1px solid ${colors.lineColor};
    border-radius: 5px;
    &:hover{
        border-color: #1e90ff;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
`;

const NextButton = styled.button`
    width: 200px;
    height: 40px;
`;


const RegisterProduct = () => {
    return (
        <Container>
            <Header>
                <TitleContainer>
                    <PageTitle>상품 등록</PageTitle>
                    <RegisterStep>STEP 1</RegisterStep>
                    <PageExplanation>기본정보 입력</PageExplanation>
                </TitleContainer>
            </Header>
            <Main>
                <Card>
                    <Label>노출 상품명</Label>
                    <InputContainer><Input/></InputContainer>
                    <Label>판매 가격</Label>
                    <InputContainer><Input/></InputContainer>
                    <Label>카테고리</Label>
                    <Categories>
                        {
                            ['OUTER', 'TOP', 'SHIRTS', 'PANTS', 'SHOES', 'BAG', 'ACC'].map((category, idx) => <Category key={idx}>{category}</Category>
                            )
                        }
                    </Categories>
                    <Label>세부 카테고리</Label>
                    <InputContainer order="last"><Input/></InputContainer>
                    <ButtonContainer>
                        <NextButton>다음</NextButton>
                    </ButtonContainer>
                </Card>
            </Main>
        </Container>
    )
}

export default RegisterProduct;

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
    width: 100%;
    max-width: 700px;
    min-width: 500px;
    border-left: 5px solid ${colors.black};
`;

const PageTitle = styled.span`
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: 20px;
    padding-left: 20px;
`;
const PageExplanation = styled.span`
    opacity: 0.8;
    font-size: 1.6rem;
`;

const Main = styled.main`
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`;

const Card = styled.div`
    background-color: #ffffff;
    width: 100%;
    max-width: 700px;
    min-width: 500px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);
    border-radius: 5px;
    border: 1px solid ${colors.lineColor};
    padding: 20px;
`;

const CardTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
`;

const CardTitleText = styled.span`
    padding-right: ${(props) => props.type === "step" ? '5px' : 0};
    padding-left: ${(props) => props.type === "title" ? '5px' : 0};
`;

const CardBody = styled.div`
    display: flex;
    justify-content: center;
`;

const Form = styled.form`
    width: 100%;
`;

const InputLable = styled.span`
    display: block;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 5px;
`;

const InputContainer = styled.div`
    padding: 10px;
`;

const Input = styled.input`
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 20px;
`;

const Categories = styled.div`
    margin-bottom: 20px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 15px;
`;

const Box = styled.div`
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
                    <PageExplanation>새로운 상품을 업로드 합니다</PageExplanation>
                </TitleContainer>
            </Header>
            <Main>
                <Card>
                    <CardTitle>
                        <CardTitleText type="step">STEP 1</CardTitleText>
                        <CardTitleText type="title">기본 정보 입력</CardTitleText>    
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <InputLable className="product-name-label">노출 상품명</InputLable>
                            <InputContainer><Input/></InputContainer>
                            <InputLable className="product-name-label">카테고리</InputLable>
                            <Categories>
                                {['OUTER', 'TOP', 'PANTS', 'SHOES', 'BAG', 'ACC'].map((item, idx) => <Box key={idx}>{item}</Box>)}
                            </Categories>
                            <InputLable className="product-name-label">옵션상품</InputLable>
                            <Input/>
                            <InputLable className="product-name-label">대표이미지</InputLable>
                            <Input/>
                        </Form>
                    </CardBody>
                </Card>
            </Main>
        </Container>
    )
}

export default RegisterProduct;

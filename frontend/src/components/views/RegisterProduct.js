import React, {useState, useRef} from 'react';
import styled from "styled-components";
import axios from "axios";
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

const Main = styled.form`
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
    border: 1px solid ${colors.lineColor};
    background: transparent;
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
    position: relative;
`;

const PreviewImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const PreviewImage = styled.div`
    width: 100%;
    height: 100%;
    ${({name, url}) => {
        if(name === MAIN_IMAGE){
            return`
                background-image: url(${url});
                background-position: center center;
                background-size: 80%;
                background-origin: padding-box;
                background-repeat: no-repeat;
            `;
        }
    }}
`;


const AddOptionBox = styled.div`
    padding: 10px;
`;

const AddOptionRow = styled.div`
    &:first-child{
        display: flex;
    }
    &:nth-child(2){
        display: grid;
        grid-template-columns: 1fr 1fr 50px;
        grid-gap: 5px;
    }
    &:last-child{
        border: 1px solid ${colors.lineColor};
        margin-top: 5px;
        padding: 10px;
    }
`;

const LabelExplain = styled.span`
    font-size: 1.2rem;
    opacity: 0.8;
    margin-left: 5px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const AddButton = styled.button`
    cursor: pointer;
`;
const Button = styled.button`
    width: "100%";
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    cursor: pointer;
`;

const newProductObject = {
    exportedName: '',
    mainImage: '',
    restImages: null,
    option:{
        sizes: [],
        colors: []
    }
};

const InputImage = styled.input`
    display: none;
`;

const EXPORTED_NAME = 'EXPORTED_NAME';
const MAIN_IMAGE = 'MAIN_IMAGE';
const PRODUCT_PRICE = 'PRODUCT_PRICE';
const COLOR_OPTION_NAME = 'COLOR_OPTION_NAME';
const COLOR_OPTION_AMOUNT = 'COLOR_OPTION_AMOUNT';
const SIZE_OPTION_NAME = 'SIZE_OPTION_NAME';
const SIZE_OPTION_AMOUNT = 'SIZE_OPTION_AMOUNT';

const RegisterProduct = () => {
    const [newProductObj, updateNewProductObj] = useState(newProductObject);
    const [colorOption, setColorOption] = useState({name: '', amount: 0});
    const [sizeOption, setSizeOption] = useState({name: '', amount: 0});
    const [previewMainImage, setPreviewMainImage] = useState(null);
    const mainProductImage = useRef(null); 

    const inputExportedName = (e) => {
        /* 노출 상품명 입력처리하는 함수*/
        const {value} = e.target;
        updateNewProductObj({
            ...newProductObj,
            exportedName: value
        });
    }
    const updateColorOptions = (e) => {
        const {value, name:optionName} = e.target;
        const controlUpdateOption = (value, optionName) => {
            const updateName = () => setColorOption({...colorOption, name: value});
            const updateAmount = (newValue) => setColorOption({...colorOption, amount: newValue});
            switch(optionName){
                case COLOR_OPTION_NAME:
                    updateName();
                    break;
                case COLOR_OPTION_AMOUNT:
                    const newValue = value*1;
                    updateAmount(newValue);
                    break;
            }
        }
        /* 컴포넌트에 Name 속성 값에 따라 어떤 것을 업데이트할지 제어한다. */
        controlUpdateOption(value, optionName);
    }

    const updateSizeOptions = (e) => {
        const {value, name:optionName} = e.target;
        const controlUpdateOption = (value, optionName) => {
            const updateName = () => setSizeOption({...sizeOption, name: value});
            const updateAmount = (newValue) => setSizeOption({...sizeOption, amount: newValue});
            switch(optionName){
                case SIZE_OPTION_NAME:
                    updateName();
                    break;
                case SIZE_OPTION_AMOUNT:
                    const newValue = value*1;
                    updateAmount(newValue);
                    break;
            }
        }
        /* 컴포넌트에 Name 속성 값에 따라 어떤 것을 업데이트할지 제어한다. */
        controlUpdateOption(value, optionName);
    }

    const addColorOption = () => {
        const {option: optionFromNewProductObj} = newProductObj;    // newProductObj의 option 객체를 디스럭터링한다.
        const colorOptions = optionFromNewProductObj.colors;        // option 객체에서 color 배열 데이터를 따로 빼서 저장한다.
        colorOptions.push(colorOption);                             // colorOption 배열에 추가
        updateNewProductObj({
            ...newProductObj,
            option: {
                ...optionFromNewProductObj,
                colors: colorOptions
            }
        })
        setColorOption({name: '', amount: 0});
    }

    const addSizeOption = () => {
        const {option: optionFromNewProductObj} = newProductObj;
        const sizeOptions = optionFromNewProductObj.sizes;
        sizeOptions.push(sizeOption);
        updateNewProductObj({
            ...newProductObj,
            option: {
                ...optionFromNewProductObj,
                sizes: sizeOptions
            }
        })
        setSizeOption({name: '', amount: 0});
    }

    const openFileSelector = (e) => {
        const imageId = e.currentTarget.id;
        mainProductImage.current.click(); //이미지 상자 클릭하면 file 타입을 가진 input 태그 클릭됌.
    }
    const updatePreviewImage = (e) => {
        const files = e.target.files[0];
        const reader = new FileReader(); // 파일리더 생성자 생성
        reader.readAsDataURL(files);
        reader.onloadend = () => {
            setPreviewMainImage(reader.result);
        }
    }


    return (
        <Container>
            <Header>
                <TitleContainer>
                    <PageTitle>상품 등록</PageTitle>
                </TitleContainer>
            </Header>
            <Main onSubmit={(e) => {
                e.preventDefault();
                console.log("서브밋 버튼 입력!");
            }}>
                <MainCol>
                    <Card>
                        <CardSection>
                            <Label>노출 상품명</Label>
                            <Input type="text" name={EXPORTED_NAME} onChange={inputExportedName}/>
                        </CardSection>
                        <CardSection>
                            <Label>이미지 등록</Label>
                            <UploadImageWrapper>
                                {/* 
                                    UploadImageBox: 클릭하면 file 타입의 input이 열릴 수 있게 창을 열어 이미지를 선택할 수 있다.
                                    이미지를 선택하면, 선택한 이미지를 로드하여 PreviewImage 태그에 썸네일로 display한다. 
                                    추가적으로 구현해야할 기능: 이미지 드래그 앤 드롭
                                */}
                                <UploadImageBox id="mainProductImage" 
                                    onClick={openFileSelector}>
                                    <PreviewImageContainer>
                                        <PreviewImage name={MAIN_IMAGE} url={previewMainImage}></PreviewImage>
                                    </PreviewImageContainer>
                                    <InputImage type="file" ref={mainProductImage} name={MAIN_IMAGE} accept="image/*" onChange={updatePreviewImage}/>
                                </UploadImageBox>

                                <UploadImageBox></UploadImageBox>
                                <UploadImageBox></UploadImageBox>
                            </UploadImageWrapper>
                        </CardSection>
                        <CardSection>
                            <Label>옵션 추가</Label>
                            <AddOptionBox>
                                <AddOptionRow>
                                    <Label>색상</Label>
                                    <LabelExplain>상품의 색상 옵션을 추가합니다.</LabelExplain>
                                </AddOptionRow>
                                <AddOptionRow>
                                    <Input type="text" placeholder="이름" name={COLOR_OPTION_NAME} value={colorOption.name} onChange={updateColorOptions}/>
                                    <Input  type="number" placeholder="수량" name={COLOR_OPTION_AMOUNT} value={colorOption.amount} onChange={updateColorOptions} min={0}/>
                                    <AddButton onClick={addColorOption}>추가</AddButton>
                                </AddOptionRow>
                                <AddOptionRow>
                                    추가 목록
                                </AddOptionRow>
                            </AddOptionBox>
                            <AddOptionBox>
                                <AddOptionRow>
                                    <Label>사이즈</Label>
                                    <LabelExplain>상품의 사이즈 옵션을 추가합니다.</LabelExplain>
                                </AddOptionRow>
                                <AddOptionRow>
                                    <Input type="text" placeholder="이름" value={sizeOption.name} name={SIZE_OPTION_NAME} onChange={updateSizeOptions}/>
                                    <Input type="number" placeholder="수량" value={sizeOption.amount} name={SIZE_OPTION_AMOUNT} onChange={updateSizeOptions}/>
                                    <AddButton onClick={addSizeOption}>추가</AddButton>
                                </AddOptionRow>
                                <AddOptionRow>
                                    추가 목록
                                </AddOptionRow>
                            </AddOptionBox>
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
                            <Input type="number" name={PRODUCT_PRICE}/>
                        </CardSection>
                    </Card>
                    <ButtonContainer>
                        <Button>미리보기</Button>
                        <Button type="submit">등록하기</Button>
                    </ButtonContainer>
                </MainCol>
            </Main>
        </Container>
    )
}

export default RegisterProduct;

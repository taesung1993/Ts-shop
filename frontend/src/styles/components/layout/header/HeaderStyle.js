import {Link} from "react-router-dom";
import styled from "styled-components";
import {colors} from "../../../config/colors";

export const Container = styled.header`
`;

export const Inner = styled.div`
    height: 50px;
    border-bottom: 1px solid ${colors.lineColor};
    display: flex;
    padding: 0 50px;
    color: ${colors.grey};
`; 

export const InnerCol = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${({kinds}) => kinds === "linkColumn" ? "flex-end" : "flex-start"};
    align-items: center;
`;

export const InnerLink = styled(Link)`
    margin-right: ${({order}) => order === "last" ? 0 : "10px"};
    &:hover{
        color: ${colors.black};
    }
`;

export const Favorites = styled.div`
    cursor: pointer;
    margin-right: 10px;
    &:hover{
        color: ${colors.black};
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid ${colors.lineColor};
`;

export const Logo = styled.img`
    width: 120px;
    height: 120px;
`;

export const TabMenu = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${colors.lineColor};
    padding: 0 20%;
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.menuLen}, 1fr)`};

    @media only screen and (max-width: 1280px){
        padding: 0 50px;
    }
`;

export const MenuItem = styled(Link)`
    justify-self: center;
    align-self: center;
`;

export const IconContainer = styled.span`
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

export const FontAwesomeIcon = styled.i`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.3rem;
`;
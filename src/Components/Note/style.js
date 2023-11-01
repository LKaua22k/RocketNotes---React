import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    
    padding: 16px 24px;
    border: none;
    border-radius: 10px;
    margin-bottom: 16px;
    transition: 0.5s;


    &:hover{
        filter: brightness(0.9);
        transition: 0.5s;

    }

    >h1{
        flex: 1;
        text-align: left;
        font-size: 24px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > footer{
        width: 100%;
        display: flex;
        margin-top: 10px;
    }

`;
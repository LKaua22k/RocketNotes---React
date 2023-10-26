import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    width: fit-content;

    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.ORANGE};

    &:hover{
        opacity: 0.7;
    }
`;
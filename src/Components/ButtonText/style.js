import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    width: fit-content;

    font-size: 16px;
    font-weight: 400;
    color: ${({theme , isActive}) => isActive ? theme.COLORS.ORANGE : theme.COLORS.BACKGROUND_700};

    &:hover{
        opacity: 0.7;
    }
`;
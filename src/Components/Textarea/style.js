import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;
    border: none;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    resize: none;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 8px;
    color: ${({theme}) => theme.COLORS.WHITE};


    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`;
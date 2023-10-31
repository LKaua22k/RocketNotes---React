import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 16px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    > input{
        width: 100%;
        height: 56px;
        border: none;
        padding: 16px;
        color: ${({theme})=> theme.COLORS.WHITE};
        background-color: transparent;
        outline: transparent;

        &:placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;
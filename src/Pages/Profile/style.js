import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 124px;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 144px;

        svg{
            font-size: 24px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;

    margin: 30px auto 0;
`;
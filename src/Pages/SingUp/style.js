import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 48px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > P{
        font-size: 14px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-bottom: 48px;
    }

    > h2{
        font-size: 24px;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 48px;
    }

    > a{
        margin-top: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};
        transition: .5s;

        &:hover{
            opacity: 0.5;
            transition: .5s;
        }
    }

`;

export const Background = styled.img`
    flex: 1;
    background: no-repeat center center;
    object-fit: cover;
`;
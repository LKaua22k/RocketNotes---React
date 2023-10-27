import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    width: 100%;
    height: 100vh;

    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: content;
        padding: 60px 0;
        overflow-y: scroll;
    }
    
`;

export const Links = styled.ul`
    list-style: none;

    > li{
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`;

export const Content = styled.div`
    max-width: 550px;
    display: flex;
    flex-direction: column;
    margin:0 auto;

    > button:first-child{
        align-self: end;
    }

    > h1{
        font-size: 36px;
        font-weight: 500;
        margin-top: 64px;
    }

    > p{
        font-size:16px;
        font-weight: 400;
        text-align: justify;
        margin-top: 16px;
    }
`;
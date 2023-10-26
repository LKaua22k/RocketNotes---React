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
        padding: 64px 0;
        overflow-y: scroll;
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
`;
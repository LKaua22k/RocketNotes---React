import styled from "styled-components";

export const Container = styled.span`
    margin-right: 6px;
    padding: 5px 16px;
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    border-radius: 5px;
`;
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

        button{
            background: none;
            border: none;
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

   > div:nth-child(4){
    margin-top: 24px;
   }

   > div:nth-child(5){
    margin-bottom: 24px;
   }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -120px auto 64px;

    width: 186px;
    height: 186px;

    > img{
        width: 186px;
        height: 186px; 
        border-radius: 50%;
    }
    
    > label{
        height: 48px;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        right: 7px;
        bottom: 7px;

        background-color: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: 50%;
        cursor: pointer;

        svg{
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_900   };
        }

        input{
            display: none;
        }
    }

`;
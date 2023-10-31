import { Container } from "./style";

export function ButtonText({title, isActive = false}){
    return(
        <Container
        type="button"
        isActive={isActive}
        >
            {title}
        </Container>
    ) 
}
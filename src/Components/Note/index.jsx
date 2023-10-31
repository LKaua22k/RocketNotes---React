import { Container } from "./style";

import {Tag} from '../Tags'

export function Note({title, ...rest}){
    return(
        <Container {...rest}>
            <h1>{title}</h1>
            
        </Container>
    )
}
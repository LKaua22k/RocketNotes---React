import { Container } from "./style";

export default function Button({title , loading = false}){
    return(
        <Container 
        type="button"
        disabled={loading}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    )
}
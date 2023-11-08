import { Container , Form } from "./style";

import {Header} from '../../Components/Header'
import {Input} from '../../Components/Input'
import {Textarea} from '../../Components/Textarea'

export function New(){
    return(
        <Container>
            <Header /> 
            <main>
                <Form>
                    <header>
                        <h1>Criar Notas</h1>
                        <a href="/">Voltar</a>
                    </header>

                    <Input placeholder="Titulo" type="text" />
                    <Textarea placeholder="Observações" />
                </Form>
            </main>
        </Container>
    )
}
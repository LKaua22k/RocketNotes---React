import { Container , Form } from "./style";

import {Header} from '../../Components/Header'
import {Input} from '../../Components/Input'
import {Textarea} from '../../Components/Textarea'
import {Section} from '../../Components/Section'
import {NoteItem} from '../../Components/NoteItem'

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

                    <Section title='Links úteis'/>
                    <NoteItem value='https://www.rocketseat.com.br'/>
                    <NoteItem  isNew placeholder='Novo link'/>

                    <Section title='Marcadores'/>

                </Form>
            </main>
        </Container>
    )
}
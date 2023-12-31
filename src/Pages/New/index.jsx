import { Container , Form } from "./style";
import { Link } from "react-router-dom";

import {Header} from '../../Components/Header'
import {Input} from '../../Components/Input'
import {Textarea} from '../../Components/Textarea'
import {Section} from '../../Components/Section'
import {NoteItem} from '../../Components/NoteItem'
import {Button} from '../../Components/Buttons'

export function New(){
    return(
        <Container>
            <Header /> 
            <main>
                <Form>
                    <header>
                        <h1>Criar Notas</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Titulo" type="text" />
                    <Textarea placeholder="Observações" />

                    <Section title='Links úteis'/>
                    <NoteItem value='https://www.rocketseat.com.br'/>
                    <NoteItem  isNew placeholder='Novo link'/>

                    <Section title='Marcadores'>
                        <div className="tags">
                            <NoteItem value='React'/>
                            <NoteItem isNew value='Nodejs'/>
                        </div>
                    </Section>
                    
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}
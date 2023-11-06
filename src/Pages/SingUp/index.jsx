import {FiLogIn, FiLock , FiMail} from "react-icons/fi"

import {Input} from '../../Components/Input'
import {Button} from '../../Components/Buttons'

import { Container, Form, Background} from "./style";


export function SingUp(){
    return(
        <Container>
            <Background src="../../../assets/back.jpg" alt="Imagem de fundo" />
            
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input  placeholder="Nome" type="text" icon={FiLogIn} />
                <Input  placeholder="E-mail" type="text" icon={FiMail} />
                <Input  placeholder="Senha" type="password" icon={FiLock} />

                <Button title="Cadastrar" />

                <a href="">Voltar para o login</a>

            </Form>
        </Container>
    )
}
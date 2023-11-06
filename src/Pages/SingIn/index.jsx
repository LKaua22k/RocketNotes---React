import {FiLogIn, FiLock , FiMail} from "react-icons/fi"

import {Input} from '../../Components/Input'
import {Button} from '../../Components/Buttons'

import { Container, Form, Background} from "./style";


export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input  placeholder="E-mail" type="text" icon={FiMail} />
                <Input  placeholder="Senha" type="password" icon={FiLock} />

                <Button title="Entrar" />

                <a href="">Criar conta</a>

            </Form>

            <Background src="../../../assets/back.jpg" alt="Imagem de fundo" />
        </Container>
    )
}
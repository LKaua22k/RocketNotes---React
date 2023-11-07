import { FiArrowLeft ,FiUser, FiMail, FiLock } from "react-icons/fi"

import {Input} from '../../Components/Input'
import {Button} from '../../Components/Buttons'
import { Container , Form } from "./style"

export function Profile(){
    return(
        <Container>
            <header>
                <a href="">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Input placeholder='Seu Nome' type='text' icon={FiUser}/>
                <Input placeholder='Seu Email' type='email' icon={FiMail}/>
                <Input placeholder='Seu Nome' type='password' icon={FiLock}/>
                <Input placeholder='Seu Nome' type='password' icon={FiLock}/>

                <Button title='Salvar'></Button>
            </Form>
        </Container>
    )
}
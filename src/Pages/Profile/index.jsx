import { FiArrowLeft ,FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import {Input} from '../../Components/Input'
import {Button} from '../../Components/Buttons'
import { Container , Form, Avatar} from "./style"

export function Profile(){
    return(
        <Container>
            <header>
                <a href="">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/LKaua22k.png" alt="User IMG" srcset="" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input placeholder='Seu Nome' type='text' icon={FiUser}/>
                <Input placeholder='Seu Email' type='email' icon={FiMail}/>
                <Input placeholder='Seu Nome' type='password' icon={FiLock}/>
                <Input placeholder='Seu Nome' type='password' icon={FiLock}/>

                <Button title='Salvar'></Button>
            </Form>
        </Container>
    )
}
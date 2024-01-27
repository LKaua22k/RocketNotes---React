import { useState } from "react";
import {FiLogIn, FiLock , FiMail} from "react-icons/fi"
import { Link } from "react-router-dom";

import {api} from "../../services/api"

import {Input} from '../../Components/Input'
import {Button} from '../../Components/Buttons'

import { Container, Form, Background} from "./style";



export function SingUp(){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    function hadleClick(){
        if(!name || !email || !password){
            alert("preencha todos os campos")
        }

        api.post("/newusers", {name,email,password})
        .then( () => {
            alert("Usuario cadastrado com sucesso")
        }).catch(error =>{
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("nao foi possivel cadastrar")
            }
        });
    }

    return(
        <Container>
            <Background src="../../../assets/back.jpg" alt="Imagem de fundo" />
            
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input  placeholder="Nome" type="text" icon={FiLogIn} onChange={e => setName(e.target.value)} />
                <Input  placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)} />
                <Input  placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)} />

                <Button title="Cadastrar" onClick={hadleClick} />

                <Link to="/">Voltar para o login</Link>

            </Form>
        </Container>
    )
}
import { FiArrowLeft ,FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import {useState} from 'react'
import {useAuth} from '../../hooks/auth'

import avatarPlaceholder from '../../../assets/avatar_placeholder.svg'

import { api } from "../../services/api"
import {Input} from '../../Components/Input'
import {Button} from '../../Components/Buttons'
import { Container , Form, Avatar} from "./style"
import { useNavigate } from "react-router-dom"

export function Profile(){
    const {user ,updateProfile} = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    async function haddleUpdate(){
        const user = {
            name: name,
            email: email,
            password: passwordNew,
            old_password: passwordOld,
        }

        await updateProfile({user, avatarFile})
    }

    function handdleBack(){
        navigate(-1)
    }

    function haddleUpdateAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)
        
        const imgagePreview = URL.createObjectURL(file);
        setAvatar(imgagePreview)

    }


    return(
        <Container>
            <header>
                <button onClick={handdleBack}>
                    <FiArrowLeft />
                </button>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt={user.name} srcset="" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file" onChange={haddleUpdateAvatar} />
                    </label>
                </Avatar>

                <Input placeholder='Seu Nome' type='text' icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
                <Input placeholder='Seu Email' type='email' icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
                <Input placeholder='Seu Nome' type='password' icon={FiLock} onChange={e => setPasswordOld(e.target.value)}/>
                <Input placeholder='Seu Nome' type='password' icon={FiLock} onChange={e => setPasswordNew(e.target.value)}/>

                <Button title='Salvar' onClick={haddleUpdate}></Button>
            </Form>
        </Container>
    )
}
import { useState } from "react";
import { Container , Form } from "./style";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import {Header} from '../../Components/Header'
import {Input} from '../../Components/Input'
import {Textarea} from '../../Components/Textarea'
import {Section} from '../../Components/Section'
import {NoteItem} from '../../Components/NoteItem'
import {Button} from '../../Components/Buttons'

export function New(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLinks, setNewLinks] = useState("")


    const [tags, setTags] = useState([])
    const [newTags, setNewTags] = useState("")

    const navigate = useNavigate()

    function haddleAddLink(){
        setLinks(prevState => [...prevState , newLinks]);
        setNewLinks("")
    }

    function haddleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function haddleAddTag(){
        setTags(prevState => [...prevState, newTags]);
        setNewTags("")
    }

    function haddleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    function handdleBack(){
        navigate(-1)
      }
    

    async function haddleNewNote(){
        if(!title){
            return alert("Campo de titulo esta vazio")
        }

        if(newLinks){
            return alert("Adicione o link ou deixe o campo vazio")
        }

        if(newTags){
            return alert("Adicione uma tag ou deixe o campo vazio")
        }


        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })

        alert("Sua nota foi Criada")
        navigate(-1)
    }

    return(
        <Container>
            <Header /> 
            <main>
                <Form>
                    <header>
                        <h1>Criar Notas</h1>
                        <Link onClick={handdleBack}>Voltar</Link>
                    </header>

                    <Input placeholder="Titulo" type="text" onChange={e => setTitle(e.target.value)} />
                    <Textarea placeholder="Observações"  onChange={e => setDescription(e.target.value)}/>

                    <Section title='Links úteis'/>
                    {
                        links.map((link , index) => (
                            <NoteItem  key={String(index)} value={link} onClick={() => haddleRemoveLink(link)}/>
                        ))
                    }
                    <NoteItem  isNew placeholder='Novo link' value={newLinks} onChange={e => setNewLinks(e.target.value)} onClick={haddleAddLink}/>

                    <Section title='Marcadores'>
                        <div className="tags">
                            {
                                tags.map((tag,index) => (
                                    <NoteItem key={String(index)} value={tag} onClick={() => haddleRemoveTag(tag)}/>
                                ))
                            }

                            <NoteItem isNew value={newTags} onChange={e => setNewTags(e.target.value)} onClick={haddleAddTag} placeholder="Nova nota"/>
                        </div>
                    </Section>
                    
                    <Button title="Salvar" onClick={haddleNewNote} />
                </Form>
            </main>
        </Container>
    )
}
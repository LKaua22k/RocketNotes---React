import {FiPlus,FiSearch} from 'react-icons/fi'
import { Container , Brand , Menu , Search , Content , NewNote} from './style'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import {Note} from '../../Components/Note'
import {Section} from '../../Components/Section'
import {Header} from '../../Components/Header'
import {ButtonText} from '../../Components/ButtonText'
import {Input} from '../../Components/Input'

export function Home(){
    const [search , setSearch] = useState("")
    const [tags , setTags] = useState([])
    const [tagsSelected , setTagsSelected] = useState([])
    const [notes , setNotes] = useState([])

    const navigate = useNavigate()

    function handdleTagsSelected(tagName){
        if(tagName === 'Todos'){
            return setTagsSelected([])
        }

        const allReadySelected = tagsSelected.includes(tagName)

        if(allReadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)

            setTagsSelected(filteredTags)
        }else {
            setTagsSelected(prevState => [...prevState,tagName])
        }
    }

    function handdleDetails(id){
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get('/tags')
            setTags(response.data)
        }

        fetchTags()
    },[])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data)
        }

        fetchNotes()
    },[tagsSelected,search])

    return(
            <Container>
                <Brand>
                    <h1>Rocketnotes</h1>
                </Brand>

                <Header />
                
                <Search>
                    <Input  placeholder="Pesquise pelo titulo" icon={FiSearch} onChange={(e) => setSearch(e.target.value)} />
                </Search>

                <Menu>
                    <li>   
                        <ButtonText title='Todos' onClick={() => handdleTagsSelected("Todos")} isActive={tagsSelected.length === 0} />
                    </li>

                    {
                            tags && tags.map( tag => {
                                return (
                                    <li key={String(tag.id)}>   
                                    <ButtonText title={tag.name} onClick={() => handdleTagsSelected(tag.name)} isActive={tagsSelected.includes(tag.name)}/>
                                </li>
                                )
                            })
                    }
                </Menu>

                <Content>
                    <Section title='Minhas notas'>
                        {
                            notes.map(note => {
                                return(
                                    <Note
                                    key={String(note.id)}
                                    data={note}
                                    onClick={() => handdleDetails(note.id)}
                                />
                                )
                            })
                        }
                    </Section>
                </Content>
                
                <NewNote to='/new'>
                    <FiPlus />
                    Criar nota
                </NewNote>
        </Container>
    )
}
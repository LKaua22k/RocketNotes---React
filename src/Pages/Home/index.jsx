import {FiPlus,FiSearch} from 'react-icons/fi'
import { Container , Brand , Menu , Search , Content , NewNote} from './style'

import {Note} from '../../Components/Note'
import {Section} from '../../Components/Section'
import {Header} from '../../Components/Header'
import {ButtonText} from '../../Components/ButtonText'
import {Input} from '../../Components/Input'

export function Home(){
    return(
            <Container>
                <Brand>
                    <h1>Rocketnotes</h1>
                </Brand>

                <Header />
                
                <Search>
                    <Input  placeholder="Teste" icon={FiSearch} />
                </Search>

                <Menu>
                    <li>   
                        <ButtonText title='Todos' isActive />
                        <ButtonText title='NodeJs' />
                        <ButtonText title='React' />
                    </li>
                </Menu>

                <Content>
                    <Section title='Minhas notas'>
                        <Note data={{title: 'React Model', tags: [{id: '1' , name:'react'},{id: '2' ,name:'Node'},]}} />
                        <Note data={{title: 'Rocket Notes', tags: [{id: '3' , name:'react'},{id: '4' ,name:'Node'},]}} />
                    </Section>
                </Content>
                
                <NewNote>
                    <FiPlus />
                    Criar nota
                </NewNote>
        </Container>
    )
}
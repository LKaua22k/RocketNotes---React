import {FiPlus,FiSearch} from 'react-icons/fi'
import { Container , Brand , Menu , Search , Content , NewNote} from './style'

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

                </Content>
                
                <NewNote>
                    <FiPlus />
                    Criar nota
                </NewNote>
        </Container>
    )
}
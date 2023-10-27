import { Container , Brand , Menu , Search , Content , NewNote} from './style'

import {Header} from '../../Components/Header'

export function Home(){
    return(
            <Container>
                <Brand>
                    Rocketseat
                    </Brand>

                <Header />
                
                <Search>

                </Search>

                <Menu>

                </Menu>

                <Content>

                </Content>
                
                <NewNote />
        </Container>
    )
}
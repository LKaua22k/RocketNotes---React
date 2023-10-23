import {Container , Profile} from './style'

export function Header(){
    return(
           <Container>
            <Profile>
                <img src="https://github.com/LKaua22k.png" alt="Imagem do usuario" />
                <div>
                    <span>Texto 1</span>
                    <strong>Texto 2</strong>
                </div>
            </Profile>
           </Container> 
        )
}
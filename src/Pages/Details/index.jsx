import {Container} from './style'

import {Header} from '../../Components/Header'
import {Button} from '../../Components/Buttons'
import {Section} from '../../Components/Section'


export function Details() {

  return(
    <Container>
      <Header />

      <Section title='Links úteis'>
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
      </Section>

      <Section title='Marcadores'>
        
      </Section>

      <Button title='Voltar'></Button>
    </Container>
  )
}


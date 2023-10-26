import {Container} from './style'

import {Header} from '../../Components/Header'
import {Button} from '../../Components/Buttons'
import {Section} from '../../Components/Section'
import {Tag} from '../../Components/Tags'
import {ButtonText} from '../../Components/ButtonText'


export function Details() {

  return(
    <Container>
      <Header />
      <ButtonText  title='Excluir a nota' />

      <Section title='Links úteis'>
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
      </Section>

      <Section title='Marcadores'>
        <Tag title='Express'/>
        <Tag title='Nodejs'/>
      </Section>

      <Button title='Voltar'></Button>
    </Container>
  )
}


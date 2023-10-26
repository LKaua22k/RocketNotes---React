import {Container, Content} from './style'

import {Header} from '../../Components/Header'
import {Button} from '../../Components/Buttons'
import {Section} from '../../Components/Section'
import {Tag} from '../../Components/Tags'
import {ButtonText} from '../../Components/ButtonText'


export function Details() {

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <h1>Introdução ao React</h1>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

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
        </Content>
      </main>
    </Container>
  )
}


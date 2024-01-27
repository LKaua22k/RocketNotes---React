import {Container, Links,  Content} from './style'
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { api } from '../../services/api'

import {Header} from '../../Components/Header'
import {Button} from '../../Components/Buttons'
import {Section} from '../../Components/Section'
import {Tag} from '../../Components/Tags'
import {ButtonText} from '../../Components/ButtonText'


export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate()

  function handdleBack(){
    navigate(-1)
  }

  async function handdleRemove(){
    const confirm = window.confirm('Deseja excluir essa nota?')

    if(confirm){
      api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }
  
  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }

    fetchNote();
    
  }, [])
  


  return(
    <Container>
      <Header />
        {
          data && 
            <main>
              <Content>
                <ButtonText  title='Excluir a nota' onClick={handdleRemove}/>
                
                <h1>
                  {data.title}
                </h1>

                <p>
                  {data.description}
                </p>

                {
                  data.links &&   
                    <Section title='Links úteis'>
                      <Links>
                        {
                          data.links.map(link => {
                            return(
                              <li key={String(link.id)}> <a href={link.url} target="_blank">{link.url}</a></li>
                            )
                          })
                        }    

                      </Links>
                    </Section>
                }

                {
                  data.tags && 
                    <Section title='Marcadores'>
                      {
                        data.tags.map(tag => {
                          return(
                            <Tag key={String(tag.id)} title={tag.name}/>
                          )
                        })
                      }
                    </Section>
                }

                <Button title='Voltar' onClick={handdleBack}></Button>
              </Content>
            </main>

        }
    </Container>
  )
}


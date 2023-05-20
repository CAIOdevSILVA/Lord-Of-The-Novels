import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PortableText } from '@portabletext/react'

import  { Loader } from "../../components/index"
import { client } from '../../client'

import * as Styles from "./style"

const Resource = () => {
  const { resource } = useParams()
  const [resourceContent, setResourceContent] = useState(null)
  const [loading, setLoading] = useState(false)

  const getResource = async(resourceParams) => {
    const data = await client.fetch(`*[_type == 'siteConfig'][0]{
      ${resourceParams}
    }`)

    return data;
   }

  useEffect(() => {
    setLoading(true)

    getResource(resource)
      .then((response) => {
        setResourceContent(response)
        setLoading(false)
      })
  }, [resource])

  const ptComponents = {
    block: {
      normal: ({ children }) => (
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "1rem",
            marginLeft: "1rem"
          }}
        >
          {children}
        </p>
      ),

      h2: ({ children }) => (
        <h2 style={{margin: "1rem 0"}}>{children}</h2>
      ),

      h3: ({ children }) => (
        <h3 style={{margin: "1rem 0"}}>{children}</h3>
      ),
    },

    listItem: {
      bullet: ({children}) => (
        <li style={{margin: ".5rem"}}>{children}</li>
      )
    }
  };

  if(loading) return <Loader message={"Carregando..."} />
  return (
    <Styles.Container>
      <PortableText value={resourceContent && resourceContent[resource]} components={ptComponents}/>
    </Styles.Container>
  )
}

export default Resource
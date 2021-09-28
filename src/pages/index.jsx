import Head from 'next/head'
import { Container } from '../components/global.styled'
import Home  from '../components/home/home'
import SectionIntroduction from '../components/section1/sectionIntroduction.styled'

export default function Index() {
  return (
    < >
      <Head>
        <title>Armazenagem de grãos GSI</title>
        <meta name="description" content="Armazenagem de grãos GSI" />
      </Head>
      <Container>
        <main>
          <Home />
          <SectionIntroduction />
        </main>
      </Container>
    </>
  )
}

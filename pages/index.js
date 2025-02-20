import Container from '../layouts/Container'
import Head from 'next/head'
import Hero from '../components/Hero'
import AuroraBackground from '../components/AuroraBackground'

export default function Home() {
  return (
    <AuroraBackground>
      <div className="min-h-screen flex flex-col">
        <Container>
          <Head>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <title>Home</title>
          </Head>
          <div className="flex-1 flex items-center justify-center my-60">
            <Hero/>
          </div>
        </Container>
      </div>
    </AuroraBackground>
  )
}

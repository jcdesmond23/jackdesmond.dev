import Container from '../components/Container'
import Head from 'next/head'
import Hero from '../components/Hero'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"

function Box() {
  return (
      <mesh>
          <boxGeometry args={[1, 1, 1]}/>
          <meshLambertMaterial attach="material" color="black"/>
      </mesh>
  )
}

export default function Home() {
  return (
      <>
        <Canvas>
            <OrbitControls></OrbitControls>
            <Box></Box>
        </Canvas>
        <Container position='relative'>
          <Head>
            <title>Home - Jack Desmond</title>
          </Head>
          <Hero/>
        </Container>
      </>
  )
}

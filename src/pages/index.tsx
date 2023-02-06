import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero'
import Nav from '@/components/Navbar'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Projects from '@/components/Projects'
import BlogSection from '@/components/BlogSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Omar Belghith</title>
        <meta name="description" content="Omar Belghith - Empowering aspiring technologists to reach their full potential by leveraging my extensive experience as a Full Stack Engineer and passion for mentorship." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/omar-b-logos_white.ico" />
      </Head>
      <main>
        <Nav/>
        <Hero/>
        <Features/>
        <About/>
        <Projects/>
        <Footer/>
      </main>
    </>
  )
}

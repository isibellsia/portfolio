import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

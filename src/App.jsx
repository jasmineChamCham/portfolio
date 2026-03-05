import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import RecentWork from './components/RecentWork'
import Education from './components/Education'
import MyService from './components/MyService'
import Showcase from './components/Showcase'
import ClientFeedback from './components/ClientFeedback'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <RecentWork />
        <Education />
        {/* <MyService /> */}
        <Showcase />
        <ClientFeedback />
      </main>
      <Footer />
    </>
  )
}

export default App

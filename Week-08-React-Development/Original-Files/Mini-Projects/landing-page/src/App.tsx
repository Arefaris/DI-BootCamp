import './App.css'
import Header from './components/Header'
import About from "./components/About"
import '@fontsource/roboto/300.css';
import Buisiness from '@mui/icons-material/Business';
import Public from '@mui/icons-material/Public';
import AccountBalance from '@mui/icons-material/AccountBalance';
import Contact from "./components/Contact"



function App() {
  const about = "At Lunexa Innovations, we believe that technology should empower, not complicate. Founded by a team of forward-thinking engineers and designers, our company creates intuitive, AI-based tools that help businesses unlock new levels of efficiency, insight, and growth. From intelligent data analytics to process automation, we bring cutting-edge solutions to companies ready to embrace the future."
  const ourValues = "Integrity, curiosity, and impact drive everything we do. We are committed to building technology that not only works seamlessly but also makes a meaningful difference. We value long-term partnerships, transparent communication, and a relentless pursuit of better."
  const ourMission = "Our mission is to transform the way businesses operate through smart, scalable, and human-centric AI solutions. We aim to make advanced technology accessible to all, helping organizations stay ahead in an ever-changing digital world."

  return (
    <>
    <Header />
      <About icon = {< Buisiness fontSize="inherit" />} title="About Us" info={about} />
      <About icon = {< Public fontSize="inherit" />} title="Our Values" info={ourValues} backColor="backColor" />
      <About icon = {< AccountBalance fontSize="inherit" />} title="Our Mission" info={ourMission} />
    <Contact />
    </>
  )
}

export default App

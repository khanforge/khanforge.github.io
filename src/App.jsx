
import { Nav, Hero, About, Education, Experience, Projects, Contact, Graph } from './Components'
import { education } from './assets/DataItems'

function App() {

  return (
    <div className=''>
      <Nav />
      <Hero />
      <About />
      <Graph sectionName="Education" data={education} />
      {/* <Education />
      <Experience />
      <Projects />
      <Contact /> */}
    </div>
  )
}

export default App

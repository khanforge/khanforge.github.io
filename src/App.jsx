
import { Nav, Hero, About, Education, Experience, Projects, Contact, Graph } from './Components'
import { education, experience } from './assets/DataItems'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <div className='m-4 p-4 sm:m-6 sm:p-6 md:m-8 md:p-8 lg:m-10 lg:p-10'>
        <About />
        <Graph sectionName="Education" data={education} />
        <Graph sectionName="Experience" data={experience} />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App

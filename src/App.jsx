
import { Nav, Hero, About, Projects, Contact, Graph, Skills } from './Components'
import { education, experience, skills } from './assets/DataItems'

function App() {


  return (
    <>
      <Nav />
      <Hero />
      <div className='m-4 p-4 sm:m-6 sm:p-6 md:m-8 md:p-8 lg:m-10 lg:p-10'>
        <About />
        <div className="flex justify-between flex-col md:flex-row">
          <Graph sectionName="Education" data={education} classes="w-32" />
          <Graph sectionName="Experience" data={experience} classes="w-36" />
        </div>
        <Projects classes='w-28' />
        <Skills classes='w-20' skills={skills} />
      </div>

      <Contact />
    </>
  )
}

export default App

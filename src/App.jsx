import { Nav, Hero, About, Projects, Contact, Graph, Skills, SocialLinks } from './Components'
import { education, experience, skills } from './assets/DataItems'

const downloadResume =
  (id) => {
    const delay = (id === 6) ? 1000 : 0;
    const timerId = setTimeout(() => {
      window.open("https://drive.google.com/file/d/1Y52gdQRu6G1K8m8A53PZR0pjb8uWz5lU/view?usp=drive_link", "_blank");
    }, delay)
  }

function App() {


  return (
    <>
      <Nav downloadResume={downloadResume} />
      <SocialLinks />
      <Hero />
      <div className='m-4 p-4 sm:m-6 sm:p-6 md:m-8 md:p-8 lg:m-10 lg:p-10'>
        <About downloadResume={downloadResume} />
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

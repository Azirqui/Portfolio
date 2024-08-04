import { MyButton } from '../components/Button'
import Title from '../components/Title'
import { projectPics } from '../components/GetProjectsData'
import '../styles/projects.css'

const Projects = () => {
    return (
        <>
        <span id='projects'></span>
        <Title  title="Projects" />
        <div className="projects-container">
            {
                projectPics.map((project, index) => {
                    return (
                        <div className="projects-card" key={index}>
                            <div className='project-img'>
                                <img src={project.pic} alt=""/>
                            </div>
                            <div className="card-body">
                                <h5 className=" text-light">{project.title}</h5>
                                <p className="card-description">{project.description}</p>
                                <div className="d-flex gap-4 my-3">
                                    <MyButton text = "View Code"></MyButton>
                                </div>
                            </div>              
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default Projects
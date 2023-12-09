// import stlying 
import './Projects.css'

import projects from './projects.json'

// project component
const Projects = () => {
    // return 
    return (
        <div className='Projects'>
            <div className='ProjCont'>
                    <div className='Project'>
                        <div className='ProjDemo'>
                            <div className='Img'>
                                <div className='project1'></div> 
                            </div>
                            <div className='ProjTech'>{projects[0].techStack}</div>
                        </div>
                        <div className='ProjDetails'>
                            <h4>{projects[0].title}</h4>
                            <a href={projects[0].sourceCode} target='_blank'>Source Code</a>
                            <a href={projects[0].liveDeploy} target='_blank'>Live Site</a>
                        </div>
                    </div>
            </div>
        </div>
    );
}

// export projects 
export default Projects;
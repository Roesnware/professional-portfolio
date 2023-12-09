// import stlying 
import './Projects.css'

// project component
const Projects = () => {
    const projects = [
        {
            "imgURL": "../assests/images/proj_2_demoo.JPG",
            "title": "SMG - Share My Games",
            "techStack": "HTML, MUI, Handlebars, mySQL, JS, RESTful API, Axios",
            "sourceCode": "https://github.com/cpicha20/SMG",
            "liveDeploy": "https://share-my-game-566086c3c183.herokuapp.com/"
        },
        {
            "imgURL": "../assests/images/tech_blog_demo.JPG",
            "title": "Tech Blog",
            "techStack": "HTML, Handlebars, CSS, mySQL",
            "sourceCode": "https://github.com/Roesnware/tech_blog",
            "liveDeploy": "https://blogpost-ucfbootcamp-133682c41872.herokuapp.com/"
        },
        {
            "imgURL": "../assests/images/project_1_demo.png",
            "title": "!Gatekeep",
            "techStack": "HTML, CSS, JS, RESTful API",
            "sourceCode": "https://github.com/Narvinator/-Gatekeep",
            "liveDeploy": "https://narvinator.github.io/-Gatekeep/"
        },
        {
            "imgURL": "../assests/images/project_3_demo.png",
            "title": "Koi Invoicing",
            "techStack": "CSS, React, Bootstrap, MUI, GraphQL API, MongoDB, Node, Express",
            "sourceCode": "https://github.com/jradmorrison/koi-invoicing",
            "liveDeploy": ""
        }
    ]
    return (
        // return 
        <div className='Projects'>
            <div className='blur blur13'></div>
            <div className='blur blur14'></div>
            <div className='blur blur15'></div>
            <div className='blur blur16'></div>
            <div className='ProjCont'>
                <div className='Project'>
                    <div className='ProjDemo'>
                        <div className='Img'>
                            <div className='projectImage project1'></div>
                        </div>
                        <div className='ProjTech'>Tech: {projects[0].techStack}</div>
                    </div>
                    <div className='ProjDetails'>
                        <h4>Title: {projects[0].title}</h4>
                        <div className='links'>
                            <a href={projects[0].sourceCode} target='_blank'>Source Code</a>
                            <a href={projects[0].liveDeploy} target='_blank'>Live Site</a>
                        </div>
                        <p className='note'>Note: Deployed with Herkou spin times may take a while!</p>
                    </div>
                </div>
                <div className='Project'>
                    <div className='ProjDemo'>
                        <div className='Img'>
                            <div className='projectImage project2'></div>
                        </div>
                        <div className='ProjTech'>Tech: {projects[1].techStack}</div>
                    </div>
                    <div className='ProjDetails'>
                        <h4>Title: {projects[1].title}</h4>
                        <div className='links'>
                            <a href={projects[1].sourceCode} target='_blank'>Source Code</a>
                            <a href={projects[1].liveDeploy} target='_blank'>Live Site</a>
                        </div>
                        <p className='note'>Note: Deployed with Herkou spin times may take a while!</p>
                    </div>
                </div>
                <div className='Project'>
                    <div className='ProjDemo'>
                        <div className='Img'>
                            <div className='projectImage project3'></div>
                        </div>
                        <div className='ProjTech'>Tech: {projects[2].techStack}</div>
                    </div>
                    <div className='ProjDetails'>
                        <h4>Title: {projects[2].title}</h4>
                        <div className='links'>
                            <a href={projects[2].sourceCode} target='_blank'>Source Code</a>
                            <a href={projects[2].liveDeploy} target='_blank'>Live Site</a>
                        </div>
                        <p className='note'>Note: Deployed with GH pages.</p>
                    </div>
                </div>
                <div className='Project'>
                    <div className='ProjDemo'>
                        <div className='Img'>
                            <div className='projectImage project4'></div>
                        </div>
                        <div className='ProjTech'>Tech: {projects[3].techStack}</div>
                    </div>
                    <div className='ProjDetails'>
                        <h4>Title: {projects[3].title}</h4>
                        <div className='links'>
                            <a href={projects[3].sourceCode} target='_blank'>Source Code</a>
                            <a href={projects[3].liveDeploy} target='_blank'>Live Site</a>
                        </div>
                        <p className='note'>Note: Not depoyed yet!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export projects 
export default Projects;
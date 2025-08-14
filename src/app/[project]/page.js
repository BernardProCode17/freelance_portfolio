import {projectsData} from '../misc/ProjectData'

export default function ProjectPage() {

    return (
        <>
            {projectsData.map((project, index) => (
                <section key={index}>

                    {/*Project Header */}
                    <div className='FP-project-header'>
                        <h1 className="FP-project-title">{project.title}</h1>
                        <p className="FP-project-description">{project.description}</p>
                        <div className="FP-project-links">
                            {project.live && (
                                <a href={`https://${project.live}`} target="_blank" rel="noopener noreferrer"
                                   className="FP-project-link">Live Demo</a>
                            )}
                            {project.github && (
                                <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer"
                                   className="FP-project-link">Github Repository</a>)}
                        </div>
                    </div>

                    {/*Project Details*/}
                    <div>
                        <h2 className="FP-project-subtitle">Project Details</h2>
                        <p className="FP-project-details">{project.process}</p>

                        <div>
                            <h3>tech</h3>
                            <ul className="FP-project-technologies">
                                {project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex} className="FP-project-technology">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ))}

        </>
    )
}

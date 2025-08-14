import {projectsData} from '../../misc/ProjectData'
import Image from "next/image";

export default function ProjectPage({params}) {
    const {slug} = params; // Get the dynamic slug from the URL
    const selectedProject = projectsData.find(p => p.slug === slug);

    console.log('Type of project:', typeof slug); // Should be 'string'

    console.log('Params !!', slug);
    console.log('Params', selectedProject);

    if (!selectedProject) {
        return <p>Project not found TEST.</p>;
    }

    return (
        <>            <section>
                {/* Project Header */}
                <div className='FP-project-header'>
                    <h1 className="FP-project-title">{selectedProject.title}</h1>
                    <p className="FP-project-description">{selectedProject.description}</p>
                    <div className="FP-project-links">
                        {selectedProject.live && (
                            <a href={`https://${selectedProject.live}`} target="_blank" rel="noopener noreferrer"
                               className="FP-project-link">Live Demo</a>
                        )}
                        {selectedProject.github && (
                            <a href={`https://${selectedProject.github}`} target="_blank" rel="noopener noreferrer"
                               className="FP-project-link">Github Repository</a>
                        )}
                    </div>
                </div>

                {/* Project Details */}
                <div>

                    <div className='FP-project-links'>
                        <Image src={selectedProject.image} alt={selectedProject.alt} width={200} height={100} unoptimized/>
                    </div>


                    <h2 className="FP-project-subtitle">Project Details</h2>
                    <p className="FP-project-details">{selectedProject.process}</p>

                    <div>
                        <h3>Technologies</h3>
                        <ul className="FP-project-technologies">
                            {selectedProject.technologies.map((tech, index) => (
                                <li key={index} className="FP-project-technology">{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>


    )
}

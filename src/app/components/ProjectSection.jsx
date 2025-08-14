import ProjectCards from "@/app/components/ProjectCards";
import {projectsDataCard} from "../misc/ProjectData";

export default function ProjectSection() {
    return (
        <section className="FP-projects" id="projects">

            {/* Project Section Header */}
            <div className="FP-projects-header">
                <h2 className='FP-projects-header-title'>Projects</h2>
                <p className='FP-projects-header-statement'>Here are some of the projects I've worked on.</p>
            </div>

            {/* Project List */}
            <div className="FP-projects-list">
                {/* Project items will go here */}
                <ProjectCards projectsInfo={projectsDataCard}/>
            </div>
        </section>
    );
}
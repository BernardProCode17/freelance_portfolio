import Link from "next/link";
import Image from "next/image";

export default function ProjectCards({projectsInfo}) {
    return (
        <>
            {projectsInfo.map((project, index) => (
                <article key={index} className="FP-project-card">
                    <Image src={project.image} alt={project.title} className="FP-project-card-image" width={200} height={150} unoptimized/>
                    <h2 className="FP-project-card-title">{project.title}</h2>
                    <p className="FP-project-card-description">{project.description}</p>
                    <Link href={`/project/${project.slug}`} className="FP-project-card-link">View Project</Link>
                </article>
            ))}
        </>
    )
}
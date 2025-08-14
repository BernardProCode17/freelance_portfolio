import FoldSection from "@/app/components/FoldSection";
import ProjectSection from "@/app/components/ProjectSection";
import InquiryForm from "@/app/components/InquiryForm";

export default function Home() {
    return (
        <>
            {/*Header Section*/}
            <FoldSection/>
            {/* Project Section*/}
            <ProjectSection />
            {/* Contact Section*/}
            <InquiryForm/>
        </>
    );
}

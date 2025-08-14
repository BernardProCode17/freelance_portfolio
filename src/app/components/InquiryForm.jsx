import ButtonLink from "@/app/components/ButtonLinks";
import {InquiryLinks} from '../misc/ButtonLinkObj'

export default function InquiryForm() {
    return (
        <section className="FP-Inquiry">
                <h2 className='FP-inquiry-title'>Project Inquiry</h2>
                <p className='FP-inquiry-content'>If you have any questions or would like to discuss a project, feel free to reach out!</p>
                <ButtonLink linkObj={InquiryLinks} sectionClassName={'inquiry'}/>
        </section>
    );
}
import Link from "next/link";
import Image from "next/image";
import footerBG from "../assets/footer-bg.png";

export default function Footer() {
    return (
        <footer className="FP-footer">
            <div className="FP-footer-content">


                <p className="FP-footer-text">Bernard Clarke Web Development 2025.</p>

                {/*Footer Contact Links*/}
                <div className="FP-footer-socials">
                    <Link href="https://www.github.com/bernardProCode17" className="FP-footer-link">Github</Link>
                    <Link href="https://www.linkedin.com/in/bernardwebpro" className="FP-footer-link">Linkedin</Link>
                    <Link href='mailto:bernardservice777@gmail.com' className="FP-footer-link">Email</Link>
                </div>
            </div>
            <Image src={footerBG} alt={'blue wave'} width={320} height={120}/>
        </footer>

    )
}
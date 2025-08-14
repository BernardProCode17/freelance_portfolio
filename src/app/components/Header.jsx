import Link from "next/link";
import Image from "next/image";
import Logo from '@/app/assets/Bernard Logo - Main.svg'

export default function Header() {

    return (
        <header className="FP-header">

            {/*Logo*/}
            <Link href="/" className="FP-header-logoLink">
                <Image src={Logo} alt="Bernard Clarke Logo" width={200} height={0} className="FP-header-logo"/>
            </Link>


            {/*Navigation*/}
            <nav className="FP-nav">
                <ul className="FP-navList">
                    <li className="FP-navItem"><Link href="/">Home</Link></li>
                    <li className="FP-navItem"><Link href="/#projects">Projects</Link></li>
                    <li className="FP-navItem"><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}
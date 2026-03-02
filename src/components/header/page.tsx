import Style from "./page.module.scss";
import Link from "next/link";

export default function Header() {
    return (
        <header className={Style.header}>
            <h1 className={Style.title}>wizamari1138</h1>
            <nav className={Style.nav}>
                <ul>
                    <li><Link href="#hero">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#certification">Certifications</Link></li>
                    <li><Link href="#skills">Skills</Link></li>
                    <li><Link href="#works">Works</Link></li>
                    <li><Link href="#links">Links</Link></li>
                </ul>
            </nav>
        </header>
    )
}
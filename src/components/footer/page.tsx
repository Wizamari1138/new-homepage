import Style from "./page.module.scss";
import LinkBox from "@/src/components/linkbox/page";


export default function Footer() {
    return (
        <>
        <footer id="links" className={Style.footer}>
            <h1 className={Style.title}>Link</h1>
            <div className={Style.linkContainer}>
                <LinkBox name="X" handle="@wizamari1138" iconName="X" url="https://x.com/wizamari1138" />
                <LinkBox name="GitHub" handle="@wizamari1138" iconName="github" url="https://github.com/wizamari1138" />
                <LinkBox name="Gmail" handle="smrr69113@gmail.com" iconName="mail" url="mailto:smrr69113@gmail.com" />
                <LinkBox name="YouTube" handle="@wizamari1138" iconName="youtube" url="https://www.youtube.com/@wizamari1138" />
            </div>
        </footer>
        <div className={Style.copyright}>
            <p className={Style.copyrightText}>© 2026 Wizamari All rights reserved.</p>
        </div>
        </>
    )
}
import Style from "./page.module.scss";
import { BsTwitterX, BsGithub, BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

type IconType = "X" | "github" | "mail" | "youtube";

type Props = {
    name: string;
    handle: string;
    iconName: IconType;
    url: string;
}

const iconMap = {
    X: <BsTwitterX className={Style.linkIcon} />,
    github: <BsGithub className={Style.linkIcon} />,
    mail: <AiOutlineMail className={Style.linkIcon} />,
    youtube: <BsYoutube className={Style.linkIcon} />
}

export default function LinkBox({ name, handle, iconName, url}: Props) {
    const icon = iconMap[iconName];
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className={Style.linkBox}>
                {icon}
                <div className={Style.linkText}>
                     <p className={Style.linkName}>{name}</p>
                    <p className={Style.linkHandle}>{handle}</p>
                </div>                
            </div>
        </a>
    );
}
import Style from "./page.module.scss";
import { BsUnity, BsGithub } from "react-icons/bs";
import { PiFileCSharpBold } from "react-icons/pi";
import { AiFillHtml5, AiOutlineJava } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTypescript, SiProcessingfoundation, SiReact, SiFigma, SiNodered } from "react-icons/si";
import { RiNextjsFill, RiFirebaseLine } from "react-icons/ri";

const iconMap = {
  "Unity": <BsUnity className={Style.icon}/>, 
  "C#": <PiFileCSharpBold className={Style.icon}/>,
  "HTML": <AiFillHtml5 className={Style.icon}/>,
  "CSS": <DiCss3 className={Style.icon}/>,
  "JavaScript": <SiJavascript className={Style.icon}/>,
  "TypeScript": <SiTypescript className={Style.icon}/>,
  "Processing": <SiProcessingfoundation className={Style.icon}/>,
  "Java": <AiOutlineJava className={Style.icon}/>,
  "React": <SiReact className={Style.icon}/>,
  "Next.js": <RiNextjsFill className={Style.icon}/>, 
  "GitHub": <BsGithub className={Style.icon}/>,
  "Firebase": <RiFirebaseLine className={Style.icon}/>,
  "Figma": <SiFigma className={Style.icon}/>,
  "Node-red": <SiNodered className={Style.icon}/>
}

type IconType = keyof typeof iconMap;

type Props = {
  name: string;
  iconName: IconType;
}

export default function Skill({name, iconName}: Props) {
  const icon = iconMap[iconName]; 
  return (
    <>
      <div className={Style.skillBox}>
        {icon}
        <p className={Style.name}>{name}</p>
      </div>
    </>
  );
}
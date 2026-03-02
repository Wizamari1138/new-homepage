import Style from "./page.module.scss";
import Image from "next/image";
import wizamari_webpage from "@/public/Images/work/wizamari_webpage.png"

type ImageType = "wizamari1138";

type Props = {
  title: string;
  language: string;
  image: ImageType;
}

const imageMap = {
  wizamari1138: wizamari_webpage
}

export default function Work({ title, language, image }: Props) {
  const imageSrc = imageMap[image];
  return (
    <>
      <div className={Style.workBox}>
        <div className={Style.imageBox}>
          <Image src={imageSrc} alt={title} fill className={Style.image}/>
        </div>
        <div className={Style.textBox}>
          <h3 className={Style.title}>{title}</h3>
          <p className={Style.language}>{language}</p>
          <p className={Style.detail}>詳細を見る →</p>
        </div>
      </div>
    </>
  );
}
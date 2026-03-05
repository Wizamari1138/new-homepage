import Style from "./page.module.scss";
import Image from "next/image";
import wizamari_webpage from "@/public/Images/work/wizamari_webpage.png"
import volcano_gardian from "@/public/Images/work/volcano-gardian.png"
import the_master_of_slacking from "@/public/Images/work/the-master-of-slacking.png"

const imageMap = {
  "wizamari1138": wizamari_webpage,
  "volcano_gardian": volcano_gardian,
  "the_master_of_slacking": the_master_of_slacking
}

type ImageType = keyof typeof imageMap;

type Props = {
  title: string;
  language: string;
  image: ImageType;
  url: string;
}

export default function Work({ title, language, image, url }: Props) {
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
          <a href={url} target="_blank" rel="noopener noreferrer" className={Style.detail}>詳細を見る →</a>
        </div>
      </div>
    </>
  );
}
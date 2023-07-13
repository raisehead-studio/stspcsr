import Image from "next/image";
import Link from "next/link";

import "./style.scss";

const CardWithMoreEffect = (props: {
  height: string;
  image_src: string;
  alt: string;
  small: boolean;
}) => {
  const { height, image_src, alt, small } = props;
  return (
    <div
      className="card_with_more_effect"
      style={{
        width: `${small && "calc(50% - 15px)"}`,
        height: `${height}px`,
      }}>
      <div className="more_text">
        <Link href="/">More...</Link>
      </div>
      <div className="photo">
        <Image src={image_src} fill={true} alt={alt} />
      </div>
      <div className="mask"></div>
    </div>
  );
};

export default CardWithMoreEffect;

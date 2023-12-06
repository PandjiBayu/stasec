import Image from "next/image";
import "./content.css";

const ContentRight = ({ imgPos, image, title, content }) => {
  let imgPath = "";
  if (image == "handshake") {
    imgPath = "/handshake.png";
  } else if (image == "achievement") {
    imgPath = "/achievement.png";
  } else if (image == "search") {
    imgPath = "/search.png";
  }else if (image == "laptop") {
    imgPath = "/laptop.png";
  }

  return (
    <section className="flex items-center space-x-[150px] px-[118px]">
      {imgPos == "left" && (
        <div>
          <Image src={imgPath} width={1200} height={1200} alt={image} />
        </div>
      )}
      <div className="flex flex-col space-y-12">
        <div className="content-title">{title}</div>
        <div className="text-[18px]">{content}</div>
      </div>
      {imgPos == "right" && (
        <div>
          <Image src={imgPath} width={1200} height={1200} alt={image} />
        </div>
      )}
    </section>
  );
};

export default ContentRight;

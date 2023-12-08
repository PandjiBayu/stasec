import Image from "next/image";
import "./content.css";

const ContentRight = ({ imgPos, image, title, content }) => {
  let imgPath = "";
  if (image === "handshake") {
    imgPath = "/handshake.png";
  } else if (image === "achievement") {
    imgPath = "/achievement.png";
  } else if (image === "search") {
    imgPath = "/search.png";
  } else if (image === "laptop") {
    imgPath = "/laptop.png";
  } else if (image === "finance") {
    imgPath = "/finance.png";
  } else if (image === "car") {
    imgPath = "/car.png";
  } else if (image === "scales") {
    imgPath = "/scales.png";
  } else if (image === "health-care") {
    imgPath = "/health-care.png";
  }

  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full px-[80px] py-[48px] space-y-8 md:space-y-0 md:space-x-4">
      <div
        className={`image-wrapper ${
          imgPos === "right" ? "order-0 md:order-1" : ""
        }`}
      >
        <Image
          className="w-full md:w-[600px]"
          src={imgPath}
          width={600}
          height={600}
          alt={image}
        />
      </div>
      <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-12">
        <div
          className="content-title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        <div
          className="text-[18px] text-center md:text-start"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </section>
  );
};

export default ContentRight;

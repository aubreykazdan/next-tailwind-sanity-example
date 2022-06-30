import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../title";
import Slide from "../slide";
import Section from "../section";

export default function Gallery({ heading, images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section>
      <Title>{heading}</Title>
      <div className="bg-gray-400 container mx-auto">
        <Slider {...settings}>
          {images
            ? images.map((image) => {
                return (
                  <Slide key={image._key} alt={image.alt} asset={image.asset} />
                );
              })
            : null}
        </Slider>
      </div>
    </Section>
  );
}

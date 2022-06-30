import SanityMuxPlayer from "sanity-mux-player";
import Section from "../section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "../slide";
import Title from "../title";
import BlockContent from "@sanity/block-content-to-react";

export default function Hero({ heading, tagline, content, video, images }) {
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="sliderNext text-2xl ml-4" onClick={onClick}>
        &rarr;
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="sliderPrev text-2xl" onClick={onClick}>
        &larr;
      </div>
    );
  }

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    draggable: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
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
    <>
      {/* <div className="flex flex-col items-center text-center">
        {heading && <Title>{heading}</Title>}
        {tagline && <span className="pt-4">{tagline}</span>}
        {content && <BlockContent blocks={content} />}
      </div> */}
      <Section fullHeight fullWidth className="bg-black">
        {video && (
          <div className="mx-10">
            <SanityMuxPlayer
              assetDocument={video.asset}
              autoload={true}
              autoplay={true}
              showControls={false}
              muted={true}
              loop={false}
            />
          </div>
        )}
      </Section>
      <Section fullWidth>
        <Slider {...carouselSettings}>
          {images &&
            images.map((item) => {
              const { _key, alt, image } = item;
              return (
                <div>
                  <Slide key={_key} alt={alt} asset={image} />
                </div>
              );
            })}
        </Slider>
      </Section>
    </>
  );
}

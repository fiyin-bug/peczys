import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swiper from "swiper";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel3d.css";
import PerfumeCard from "./PerfumeCard";

const Carousel3D = ({ perfumes }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
    });

    return () => {
      swiper.destroy();
    };
  }, [perfumes]);

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">OUR SPECIALS</h2>
      <div className="carousel-3d-container">
        <div className="swiper">
          <div className="swiper-wrapper">
            {perfumes && perfumes.length > 0 ? (
              perfumes.map((perfume) => (
                <div
                  className="swiper-slide"
                  key={perfume.id}
                  onClick={() => navigate("/perfumes")}
                >
                  <PerfumeCard {...perfume} />
                </div>
              ))
            ) : (
              <div className="swiper-slide">
                <p>No perfumes available.</p>
              </div>
            )}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./MainCarousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="carousel-button right" onClick={handleNext}>
        &gt;
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

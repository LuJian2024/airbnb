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
    <div className="main-carousel-container">
      {currentIndex !== 0 && (
        <button className="carousel-button left" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "12px",
              width: "12px",
              stroke: "currentcolor",
              strokeWidth: "4",
              overflow: "visible",
            }}
          >
            <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
          </svg>
        </button>
      )}
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      {currentIndex !== images.length - 1 && (
        <button className="carousel-button right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "12px",
              width: "12px",
              stroke: "currentcolor",
              strokeWidth: "4",
              overflow: "visible",
            }}
          >
            <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
          </svg>
        </button>
      )}
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

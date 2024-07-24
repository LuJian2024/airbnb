/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./PhotoCard.css";
import MainCarousel from "../MainCarousel/MainCarousel";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";

const PhotoCard = ({
  photo,
  title,
  personName,
  date,
  carouselImages,
  onClick,
  liveButton,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setSelectedImage } = useContext(AppContext)

  const imageClickHandler = (imgItem) => {
    setSelectedImage(imgItem)
    localStorage.setItem('selectedImage', imgItem) //use localStorage
    localStorage.setItem('imageList', JSON.stringify('')); //Forcibly set to null to select only the current image
  }

  return (

    <div
      className={`photo-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    // onClick={onClick}
    >
      {console.log(carouselImages)}
      {/* here sollt stellt MainCarousel, nicht in MainInfoCard */}
      {carouselImages ? (
        <div>
          <h2>{photo.title}</h2>
          <MainCarousel images={carouselImages} />
        </div>
      ) :

        <NavLink to="/detail" target="_blank" rel="noopener noreferrer" onClick={() => imageClickHandler(photo)}>
          <img src={photo} alt={title} />
        </NavLink>

      }



      {
        liveButton && (
          <div
            className="live-button"
            onClick={() => console.log("Live Button Clicked")}
          >
            Live
          </div>
        )
      }

      {/* {
  isHovered && ( */}
      <div className="download-icon" onClick={onClick}>
        <span>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "14px",
              width: "14px",
              stroke: "currentcolor",
              strokeWidth: "3.42857",
              overflow: "visible",
            }}
          >
            <path
              d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
              fill="none"
            ></path>
          </svg>
        </span>
      </div>
      {/* )}  */}
      <div className="photo-info">
        <div className="title">{title}</div>
        <div className="person">{personName}</div>
        <div className="date">{date}</div>
      </div>
    </div >
  );
}

export default PhotoCard;

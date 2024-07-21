import { NavLink } from 'react-router-dom';
import './InfoCard.css'
import { useState } from 'react';

const InfoCard = () => {
    const images = ['/images/town1.jpg', '/images/town2.jpg', '/images/town3.jpg', '/images/town4.jpg', '/images/town5.jpg']
    const [currentImgID, setCurrentImgID] = useState(0)
    const [selectedOption, setSelectedOption] = useState(0)

    const prevPictureHandler = () => {
        setCurrentImgID(prevPicture => prevPicture > 0 ? prevPicture - 1 : images.length - 1)
    }
    const nextPictureHandler = () => {
        setCurrentImgID(prevPicture => prevPicture < images.length - 1 ? prevPicture + 1 : 0)
    }
    const handleOptionChange = (id) => {
        setSelectedOption(id)
    }
    return (
        // <NavLink to="/detail">
        <div className="carousel-container">
            <div className="carousel-img">
                <button className='prev-img' onClick={prevPictureHandler} >prev</button>
                {images.map((imgItem, i) =>
                (<div key={i} className={i === currentImgID ? 'carousel-slide carousel-active' : 'carousel-slide'}>
                    <img src={imgItem} />
                </div>))}
                <button className='next-img' onClick={nextPictureHandler} >next</button>
                <ul className='carousel-dots'>
                    {Array(5).fill('').map((_, i) =>
                        <li key={i} className={i === currentImgID ? 'active-dot' : ''}></li>
                    )}
                </ul>
            </div>
            <div className="carousel-text">
                <h3>Gaular Norway</h3>
                <p>1,267 kilometers away</p>
                <p>Aug 9-14</p>
                <h3>price<span>night</span></h3>
            </div>
        </div>
        // </NavLink>
    );
}

export default InfoCard;

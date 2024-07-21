/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import './InfoCard.css'
import { useState } from 'react';
// import { catalogCardLists } from '../../assets/catalogsdata/catalogsdata';

const InfoCard = ({ catalogList }) => {
    // console.log(catalogList);
    const [currentImgID, setCurrentImgID] = useState(0)
    // const [selectedOption, setSelectedOption] = useState(0)

    const prevPictureHandler = () => {
        setCurrentImgID(prevPicture => prevPicture > 0 ? prevPicture - 1 : catalogList.image.length - 1)
    }
    const nextPictureHandler = () => {
        setCurrentImgID(prevPicture => prevPicture < catalogList.image.length - 1 ? prevPicture + 1 : 0)
    }
    // const handleOptionChange = (id) => {
    //     setSelectedOption(id)
    // }
    return (

        <div className="carousel-container">
            <div className="carousel-img">
                <button className='prev-img' onClick={prevPictureHandler} >prev</button>
                {catalogList.image.map((imgItem, i) =>
                (<div key={i} className={i === currentImgID ? 'carousel-slide carousel-active' : 'carousel-slide'}>
                    <NavLink to="/detail">
                        <img src={imgItem} />
                    </NavLink>
                </div>))}
                <button className='next-img' onClick={nextPictureHandler} >next</button>
                <ul className='carousel-dots'>
                    {Array(5).fill('').map((_, i) =>
                        <li key={i} className={i === currentImgID ? 'active-dot' : ''}></li>
                    )}
                </ul>
            </div>
            <NavLink to="/detail">
                <div className="carousel-text">
                    <h3>{catalogList.place}</h3>
                    <p>{catalogList.distance}</p>
                    <p>{catalogList.date}</p>
                    <h3>{catalogList.price} <span>night</span></h3>
                </div>
            </NavLink >
        </div>

    );
}

export default InfoCard;

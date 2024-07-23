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
                <button className='prev-img' onClick={prevPictureHandler} ><img style={{ width: '12px' }} src='/svg/arrowLeft.svg' /></button>
                {catalogList.image.map((imgItem, i) =>
                (<div key={i} className={i === currentImgID ? 'carousel-slide carousel-active' : 'carousel-slide'}>
                    <NavLink to="/detail" target="_blank" rel="noopener noreferrer">
                        <img src={imgItem} />
                    </NavLink>
                </div>))}
                <button className='next-img' onClick={nextPictureHandler} ><img style={{ width: '12px' }} src='/svg/arrowRight.svg' /></button>
                <ul className='carousel-dots'>
                    {Array(5).fill('').map((_, i) =>
                        <li key={i} className={i === currentImgID ? 'active-dot' : ''}></li>
                    )}
                </ul>
            </div>
            {/* target="_blank": 使链接在新标签页中打开。rel="noopener noreferrer": 安全性属性，防止新页面获取对原页面的引用，推荐在使用target="_blank"时加上。 */}
            <NavLink to="/detail" target="_blank" rel="noopener noreferrer">
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

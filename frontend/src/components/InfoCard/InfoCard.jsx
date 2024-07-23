/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from 'react-router-dom';
import './InfoCard.css'
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppProvider';
// import { catalogCardLists } from '../../assets/catalogsdata/catalogsdata';

const InfoCard = ({ catalogList }) => {
    // Using "localStorage" makes it unnecessary to use "useContext", otherwise "useContext" must be used to transfer the selected image.  
    // const { setSelectedImage } = useContext(AppContext)
    // const navigate = useNavigate()

    const [currentImgID, setCurrentImgID] = useState(0)

    // const [selectedOption, setSelectedOption] = useState(0)

    // const handleOptionChange = (id) => {
    //     setSelectedOption(id)
    // }

    const prevPictureHandler = () => {
        setCurrentImgID(prevPicture => prevPicture > 0 ? prevPicture - 1 : catalogList.image.length - 1)
    }
    const nextPictureHandler = () => {
        setCurrentImgID(prevPicture => prevPicture < catalogList.image.length - 1 ? prevPicture + 1 : 0)
    }
    const imageClickHandler = (imgItem) => {
        // setSelectedImage(imgItem)
        // console.log(imgItem);
        // navigate('/detail')
        localStorage.setItem('imageList', JSON.stringify(catalogList.image)); // 存储整个图片数组
        localStorage.setItem('selectedImage', imgItem) // 使用 localStorage
    }

    return (
        <div className="carousel-container">
            <div className="carousel-img">
                <button className='prev-img' onClick={prevPictureHandler} ><img style={{ width: '12px', height: '12px' }} src='/svg/arrowLeft.svg' /></button>
                {catalogList.image.map((imgItem, i) =>
                (<div key={i} className={i === currentImgID ? 'carousel-slide carousel-active' : 'carousel-slide'}>
                    {/* 如果需要在新标签页打开链接，同时保持上下文状态，可以使用一种不同的方式来处理上下文数据传递。一个常见的解决方案是在点击时使用 localStorage 或 sessionStorage 存储选定的图片，然后在新标签页中读取这个数据。使用这种方法则无需使用useContext. 使用 localStorage 或 sessionStorage在点击图片时存储数据：在 InfoCard 组件中，点击图片时将数据存储到 localStorage 或 sessionStorage。在新标签页加载时读取数据：在 DetailInfos 组件中，加载时从 localStorage 或 sessionStorage 读取数据。 */}
                    {/* target="_blank" rel="noopener noreferrer" 如果不用在新标签页中打开链接，则可以直接使用useContext传递参数，无需使用localStorage. */}
                    <NavLink to="/detail" target="_blank" rel="noopener noreferrer" onClick={() => imageClickHandler(imgItem)} >
                        <img src={imgItem} />
                    </NavLink>
                    {/* <button onClick={() => imageClickHandler(imgItem)}>
                        <img src={imgItem} alt="catalog" />
                    </button> */}
                </div>))}
                <button className='next-img' onClick={nextPictureHandler} ><img style={{ width: '12px', height: '12px' }} src='/svg/arrowRight.svg' /></button>
                <ul className='carousel-dots'>
                    {Array(5).fill('').map((_, i) =>
                        <li key={i} className={i === currentImgID ? 'active-dot' : ''}></li>
                    )}
                </ul>
            </div>
            {/* target="_blank": 使链接在新标签页中打开。rel="noopener noreferrer": 安全性属性，防止新页面获取对原页面的引用，推荐在使用target="_blank"时加上。 */}
            <NavLink to="/detail" target="_blank" rel="noopener noreferrer">
                <div className="carousel-text">
                    <h3 style={{ color: 'rgb(34, 34, 34)', fontSize: '15px', fontWeight: '500' }} >{catalogList.place}</h3>
                    <p style={{ color: 'rgb(106, 106, 106)', fontSize: '15px', fontWeight: '400', padding: '3px 0' }}>{catalogList.distance}</p>
                    <p style={{ color: 'rgb(106, 106, 106)', fontSize: '15px', fontWeight: '400' }}>{catalogList.date}</p>
                    <h3 style={{ color: 'rgb(34, 34, 34)', fontSize: '15px', fontWeight: '500', paddingTop: '10px' }}>{catalogList.price} <span style={{ color: 'rgb(34, 34, 34)', fontSize: '15px', fontWeight: '400' }}>night</span></h3>
                </div>
            </NavLink >
        </div>
    );
}

export default InfoCard;

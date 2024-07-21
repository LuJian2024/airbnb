import { NavLink } from 'react-router-dom';
import './InfoCard.css'

const InfoCard = () => {
    const imgs = ['/images/town1.jpg', '/images/town2.jpg', '/images/town3.jpg', '/images/town4.jpg', '/images/town5.jpg']

    return (
        <NavLink to="/detail">,
            <div className="carousel-container">
                <div className="carousel-img">
                    <button className='prev-img'>prev</button>
                    <img src='/images/town1.jpg' />
                    <button className='next-img'>next</button>
                    <ul className='carousel-dots'>
                        {Array(5).fill('').map((_, i) => {
                            <li key={i}></li>
                        })}
                    </ul>
                </div>
                <div className="carousel-text">
                    <h3>Gaular Norway</h3>
                    <p>1,267 kilometers away</p>
                    <p>Aug 9-14</p>
                    <h3>price<span>night</span></h3>
                </div>
            </div>
        </NavLink>
    );
}

export default InfoCard;

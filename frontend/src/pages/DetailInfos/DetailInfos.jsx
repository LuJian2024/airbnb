import { NavLink } from "react-router-dom";
import './DetailInfos.css'
import '/svg/save.svg'
import '/svg/share.svg'
import '/svg/diamond.svg'
import '/svg/flag.svg'

const DetailInfos = () => {
    return (
        <div className="details-container">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <h1>The street scenery that leaves you longing to linger</h1>
                <div className="share-save" style={{ display: 'flex', gap: '15px' }} >
                    <NavLink >
                        <img src='/svg/share.svg' style={{ width: '16px' }} />
                        Share
                    </NavLink>
                    <NavLink>
                        <img src='/svg/save.svg' style={{ width: '16px' }} />
                        Save
                    </NavLink>
                </div>
            </header>
            <main className="details-main-container">
                <div className="picture-details"  ></div>
                <div className="text-details">
                    <div className="left-text"></div>
                    <div className="right-container">
                        <div className="right-reserve"></div>
                        <div className="right-text">

                            <img src='/svg/diamond.svg' style={{ width: '32px' }} />
                            <div>
                                <p>This is a rare find</p>
                                <p>Miras place is usually fully booked.</p>
                            </div>
                        </div>
                        <div className="right-link-login">
                            <NavLink >
                                <img src='/svg/flag.svg' style={{ width: '16px' }} />
                                Report this listing
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DetailInfos;

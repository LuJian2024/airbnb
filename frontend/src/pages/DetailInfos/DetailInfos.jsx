import { NavLink } from "react-router-dom";
import './DetailInfos.css'

const DetailInfos = () => {
    return (
        <div className="details-container">
            <header style={{ display: 'flex' }} >
                <h1>The street scenery that leaves you longing to linger</h1>
                <NavLink>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '2', overflow: 'visible' }}><path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none"></path></svg>

                    Share
                </NavLink>
                <NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '2', overflow: 'visible' }}><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
                    Save
                </NavLink>
            </header>
            <main className="details-main-container">
                <div className="picture-details"  ></div>
                <div className="text-details">
                    <div className="left-text"></div>
                    <div className="right-container">
                        <div className="right-reserve"></div>
                        <div className="right-text">
                            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'rgb(227, 28, 95)', stroke: 'currentcolor' }}><g stroke="none"><path d="m32.62 6 9.526 11.114-18.146 23.921-18.147-23.921 9.526-11.114z" fillOpacity=".2"></path><path d="m34.4599349 2 12.8243129 14.9616983-23.2842478 30.6928721-23.28424779-30.6928721 12.82431289-14.9616983zm-17.9171827 16h-12.52799999l18.25899999 24.069zm27.441 0h-12.528l-5.73 24.069zm-14.583 0h-10.802l5.4012478 22.684zm-15.92-12.86-9.30799999 10.86h11.89399999zm19.253-1.141h-17.468l2.857 12.001h11.754zm1.784 1.141-2.586 10.86h11.894z"></path></g></svg>
                        </div>
                        <div className="right-link-login"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DetailInfos;

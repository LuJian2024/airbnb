/* eslint-disable no-debugger */
import { NavLink, useNavigate } from "react-router-dom";
import './DetailInfos.css'
import '/svg/save.svg'
import '/svg/share.svg'
import '/svg/diamond.svg'
import '/svg/flag.svg'
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";

const DetailInfos = () => {
    const { selectedImage, setSelectedImage } = useContext(AppContext)
    const [localImage, setLocalImage] = useState(selectedImage)

    console.log("selectedImage", selectedImage);

    useEffect(() => {
        if (!selectedImage) {
            const storedImage = localStorage.getItem('selectedImage')
            if (storedImage) {
                // 通常我们会先更新上下文的状态（即 setSelectedImage(storedImage);），然后再更新组件的本地状态（即 setImage(storedImage);）。这样可以确保全局状态首先被更新，然后本地状态也能保持同步。
                setSelectedImage(storedImage) // 更新上下文中的选中图片
                setLocalImage(storedImage)  // 本地状态设置为存储的图片 URL
            }
        }
    }, [selectedImage, setSelectedImage]);

    return (
        <div className="details-container">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <h1>The picture that leaves you longing to linger</h1>
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
                <div className="picture-details"  >
                    {localImage ? <img src={selectedImage} alt="Selected" className="single-picture" /> : <p>No image selected</p>}
                </div>
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

/* eslint-disable no-debugger */
import { NavLink, useNavigate } from "react-router-dom";
import './DetailInfos.css'
import '/svg/save.svg'
import '/svg/share.svg'
import '/svg/diamond.svg'
import '/svg/flag.svg'
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppProvider";

const DetailInfos = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageList, setImageList] = useState([]);

    const targetRef = useRef(null)
    const [isFixed, setIsFixed] = useState(false)
    const [initialTopPosition, setInitialTopPosition] = useState(null)

    useEffect(() => {
        const storedImageList = localStorage.getItem('imageList');
        const storedImage = localStorage.getItem('selectedImage');

        if (storedImageList) {
            setImageList(JSON.parse(storedImageList));
            console.log(imageList);
        }
        if (storedImage) {
            setSelectedImage(storedImage);
        }
    }, [selectedImage]);


    const scrollHandler = () => {
        if (window.scrollY >= 800 && !isFixed) {
            setIsFixed(true);
        } else if (window.scrollY < 800 && isFixed) {
            setIsFixed(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [isFixed]);

    // const scrollHandler = () => {
    //     if (targetRef.current) {
    //         const rect = targetRef.current.getBoundingClientRect();
    //         if (rect.top <= 0 && !isFixed) {
    //             setIsFixed(true)
    //         } else if (window.scrollY < initialTopPosition && isFixed) {
    //             console.log(window.scrollY);
    //             console.log(initialTopPosition);
    //             setIsFixed(false)
    //         }

    //     }
    // }

    // useEffect(() => {
    //     if (targetRef.current) {
    //         setInitialTopPosition(targetRef.current.offsetTop)
    //     }
    //     window.addEventListener('scroll', scrollHandler);
    //     return () => {
    //         window.removeEventListener('scroll', scrollHandler);
    //     };
    // }, [initialTopPosition]);


    // const { selectedImage, setSelectedImage } = useContext(AppContext)
    // const [localImage, setLocalImage] = useState(selectedImage)

    // useEffect(() => {
    //     if (!selectedImage) {
    //         console.log("selectedImage", selectedImage);
    //         const storedImage = localStorage.getItem('selectedImage')
    //         if (storedImage) {
    //             // 通常我们会先更新上下文的状态（即 setSelectedImage(storedImage);），然后再更新组件的本地状态（即 setImage(storedImage);）。这样可以确保全局状态首先被更新，然后本地状态也能保持同步。
    //             setSelectedImage(storedImage) // 更新上下文中的选中图片
    //             setLocalImage(storedImage)  // 本地状态设置为存储的图片 URL
    //         }
    //     }
    // }, [selectedImage, setSelectedImage]);

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
                {console.log(imageList.length >= 5)}
                {(imageList.length >= 5) ?
                    (<div className="picture-details multi-pictures" >
                        {imageList.map((image, i) => (<div key={i} className="detail-picture-container"><img src={image} /></div>))}
                    </div>) :
                    (<div className="picture-details"  >
                        {selectedImage ? <img src={selectedImage} alt="Selected" className="single-picture" /> : <p>No image selected</p>}
                    </div>)}

                <div className="text-details">
                    <div className="left-text">
                        {/* {imageList.length > 0 && (
                            <p>Image list contains {imageList.length} images.</p>
                        )} */}
                    </div>
                    <div
                        ref={targetRef}
                        className={`right-container ${isFixed ? 'fixed' : ''}`}
                        style={{ top: isFixed ? `${initialTopPosition}px` : null }}>

                        <div className="right-reserve">

                            scroll to here then fixed
                        </div>
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

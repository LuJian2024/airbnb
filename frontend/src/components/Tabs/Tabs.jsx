import { useEffect, useState } from 'react';
import { tabsImg, tabsText } from '../../assets/tabsdata/tabsdata';
import './tabs.css'
import { useLocation, useNavigate } from 'react-router-dom';
import '/svg/arrowRight.svg'
import '/svg/arrowLeft.svg'
import '/svg/tabsFilter.svg'

// 接受从Catalog 路径那里传来的参数params
const Tabs = ({ initialTabID = 0, initialPage = 0 }) => {

    const [selectedOption, setSelectedOption] = useState(initialTabID);

    const [currentPage, setCurrentPage] = useState(initialPage)
    const navigate = useNavigate()
    // const location = useLocation()

    //from tabsdata.js get tabsLists as [{}]
    const tabLists = tabsImg.map((item, i) => ({
        id: i,
        image: item,
        text: tabsText[i]

    }))
    const iconsPrePage = 16
    const totalPages = Math.ceil(tabLists.length / iconsPrePage)

    // // 使用 useEffect 根据 URL 路径更新 selectedOption
    // useEffect(() => {
    //     const selectedTabFromPath = parseInt(location.pathname.split('/')[2] || 0, 10);
    //     setSelectedOption(selectedTabFromPath);
    // }, [location]);

    // 使用 useEffect 解析 URL 并更新 selectedOption 和 currentPage
    // useEffect(() => {
    //     const params = new URLSearchParams(location.search);
    //     const page = parseInt(params.get('page') || '0', 10);
    //     const tabId = parseInt(location.pathname.split('/')[2] || '0', 10);

    //     setSelectedOption(tabId);
    //     setCurrentPage(page);
    // }, [location]);

    useEffect(() => {
        // 初始化时设置状态
        setSelectedOption(initialTabID);
        setCurrentPage(initialPage);
    }, [initialTabID, initialPage]);

    // const handleOptionChange = (event) => {
    //     //注意：input里的value都是字符串类型，使用时要注意类型的匹配
    //     const selectedTab = Number(event.target.value)
    //     setSelectedOption(selectedTab);
    //     if (selectedTab > 0) {
    //         navigate(`/catalog/${selectedTab}`);
    //     } else {
    //         navigate("/");
    //     }
    // };

    const handleOptionChange = (event) => {
        const selectedTab = Number(event.target.value);
        const newPage = Math.floor(selectedTab / iconsPrePage); // 计算新页码
        setSelectedOption(selectedTab);
        if (selectedTab > 0) {
            navigate(`/catalog/${selectedTab}/${newPage}`);
        } else {
            navigate("/");
        }
    };

    // debugger
    const prevPageHandler = () => {
        if (currentPage > 0) { setCurrentPage(prevPage => prevPage - 1) }
    }
    const nextPageHandler = () => {
        if (currentPage < totalPages - 1) { setCurrentPage(prevPage => prevPage + 1) }
    }

    return (
        <div className='container' style={{ display: 'flex' }} >

            <div className="slider-container">

                {currentPage > 0 && <button className="prev" onClick={prevPageHandler} ><img style={{ width: '12px' }} src='/svg/arrowLeft.svg' /></button>}
                {/* 像左移动整个视口大小页面的距离 */}
                <div className='slide-tabs' style={{ transform: `translateX(-${currentPage * 100}%)` }} >
                    {/* 按照每页17个图标，目前可以分成四页 */}
                    {Array.from({ length: totalPages }, (_, i) =>
                    (<div key={i} className="slide" >
                        {/* 根据每页需要的图标数量，填充每页，这里是div块 */}
                        {tabLists.slice(i * iconsPrePage, (i + 1) * iconsPrePage).map((tablist, i) =>
                        (<label key={i} className="tab-item">
                            <input
                                style={{ position: 'absolute', opacity: '0' }}
                                type="radio"
                                name="option"
                                value={tablist.id}
                                checked={selectedOption === tablist.id}
                                onChange={handleOptionChange}
                            />
                            <div className='tab-container'>
                                <img src={tablist.image} style={{ maskImage: `url(${tablist.image})`, maskSize: 'cover' }} />
                                {/* <img src={tablist.image} /> */}
                                {/* <span style={{ color: selectedOption === tablist.id && 'black', fontWeight: '700' }} >
                                    {tablist.text}
                                </span> */}
                                <div style={{ color: selectedOption === tablist.id && 'black', fontWeight: '700' }} >
                                    <span style={{ paddingBottom: '10px' }} >{tablist.text}</span>
                                </div>
                            </div>
                        </label>
                        )
                        )}

                    </div>)
                    )}
                </div>

                {currentPage < totalPages - 1 && <button className="next" onClick={nextPageHandler} ><img style={{ width: '12px' }} src='/svg/arrowRight.svg' /></button>}

            </div>
            {selectedOption > 0 && <button className="tabs-filter" style={{ width: '86px', height: '48px' }} >
                <img style={{ width: '16px', height: '16px' }} src='/svg/tabsFilter.svg' /><p>Filter</p></button>}
            {/* <div>Selected Option: {selectedOption}</div> */}
        </div >


    );
}

export default Tabs;

import { useState } from 'react';
import { tabsImg, tabsText } from '../../assets/tabsdata/tabsdata';
import './tabs.css'
const Tabs = () => {

    const [selectedOption, setSelectedOption] = useState(0);

    const [currentPage, setCurrentPage] = useState(0)

    //from tabsdata.js get tabsLists as [{}]
    const tabLists = tabsImg.map((item, i) => ({
        id: i,
        image: item,
        text: tabsText[i]

    }))
    const iconsPrePage = 17
    const totalPages = Math.ceil(tabLists.length / iconsPrePage)

    const handleOptionChange = (event) => {
        //注意：input里的value都是字符串类型，使用时要注意类型的匹配
        setSelectedOption(Number(event.target.value));
        console.log(event.target.value);
    };
    // debugger
    const prevPageHandler = () => {
        if (currentPage > 0) { setCurrentPage(prevPage => prevPage - 1) }
    }
    const nextPageHandler = () => {
        if (currentPage < totalPages - 1) { setCurrentPage(prevPage => prevPage + 1) }
    }

    return (
        <div className='container'  >
            {/*        
            {tabLists.map((tablist, i) =>
                <label key={i} >
                    <input
                        style={{ position: 'absolute', opacity: '0' }}
                        type="radio"
                        name="option"
                        value={i}
                        checked={selectedOption === i}
                        onChange={handleOptionChange}
                    />
                    <div className='tab-container'>
                        <img src={tablist.image} />
                        <span style={{ background: selectedOption === i && 'red' }} >
                            {tablist.text}
                        </span>
                    </div>
                </label>
            )} */}
            <div className="slider-container">

                {currentPage > 0 && <button className="prev" onClick={prevPageHandler} >pre</button>}

                <div className='slide-tabs' style={{ transform: `translateX(-${currentPage * 100}%)` }} >
                    {console.log(`translateX(-${currentPage * 100}%)`)}
                    {Array.from({ length: totalPages }, (_, i) =>
                    (<div key={i} className="slide" >

                        {tabLists.slice(i * iconsPrePage, (i + 1) * iconsPrePage).map((tablist, i) =>
                        (<label key={i} className="tab-item">
                            <input
                                style={{ position: 'absolute', opacity: '0' }}
                                type="radio"
                                name="option"
                                value={i}
                                checked={selectedOption === i}
                                onChange={handleOptionChange}
                            />
                            <div className='tab-container'>
                                <img src={tablist.image} />
                                <span style={{ background: selectedOption === i && 'red' }} >
                                    {tablist.text}
                                </span>
                            </div>
                        </label>
                        )
                        )}

                    </div>)
                    )}

                </div>
            </div>
            {currentPage < totalPages - 1 && <button className="next" onClick={nextPageHandler} >next</button>}
            {/* const App = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    setSlideIndex(slideIndex + 1);
  };

  const generateDivs = (start) => {
    let divs = [];
    for (let i = start; i < start + 15; i++) {
      divs.push(<div key={i} className="box">{i}</div>);
    }
    return divs;
  };

  return (
    <div className="container">
      <div className="slider" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        <div className="slide">{generateDivs(slideIndex * 15)}</div>
        <div className="slide">{generateDivs((slideIndex + 1) * 15)}</div>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default App; */}

            {/* <label>
                        <input
                            style={{ position: 'absolute', opacity: '0' }}
                            type="radio"
                            name="option"
                            value="1"
                            checked={selectedOption === '1'}
                            onChange={handleOptionChange}
                        />
                        <span style={{ background: selectedOption === '1' && 'red', display: "inline-block", width: '20px', height: '20px', border: '1px solid black' }} >

                        </span>
                    </label>
                    <label>
                        <input
                            style={{ position: 'absolute', opacity: '0' }}
                            type="radio"
                            name="option"
                            value="2"
                            checked={selectedOption === '2'}
                            onChange={handleOptionChange}
                        />
                        <span style={{ background: selectedOption === '2' && 'red', display: "inline-block", width: '20px', height: '20px', border: '1px solid black' }} >

                        </span>
                    </label>
                    <label>
                        <input
                            style={{ position: 'absolute', opacity: '0' }}
                            type="radio"
                            name="option"
                            value="3"
                            checked={selectedOption === '3'}
                            onChange={handleOptionChange}
                        />
                        <span style={{ background: selectedOption === '3' && 'red', display: "inline-block", width: '20px', height: '20px', border: '1px solid black' }} >

                        </span>
                    </label> */}

            <div>Selected Option: {selectedOption}</div>
        </div >


    );
}

export default Tabs;

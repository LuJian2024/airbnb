import { useState } from 'react';
import { tabsImg, tabsText } from '../../assets/tabsdata/tabsdata';
import './tabs.css'
const Tabs = () => {

    const [selectedOption, setSelectedOption] = useState(0);
    const options = Array.from({ length: 10 }, (_, i) => i + 1)

    //from tabsdata.js get tabsLists as [{}]
    const tabLists = tabsImg.map((item, i) => ({
        id: i,
        image: item,
        text: tabsText[i]

    }))

    console.log(tabLists);

    const handleOptionChange = (event) => {
        //注意：input里的value都是字符串类型，使用时要注意类型的匹配
        setSelectedOption(Number(event.target.value));
        console.log(event.target.value);
    };


    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }} >
            {console.log(options)}
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


            )}

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
        </div>


    );
}

export default Tabs;

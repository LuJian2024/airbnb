import { useState, useEffect } from 'react'
import "../../css/header1.css"
export default function Header1() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='header1'>

        <div className='airbnb'>
          <img className='air-logo' src="/images/airbnb.png" alt="airbnb-logo" />
        </div>
        <div className='air'>
          <div className='stay'>
            <button><b>Stays</b></button>
          </div>
          <div className='Experiences'>
            <button>Experiences</button>
          </div>
        </div>
        <div className='air'>
          <div className='air'>
            <button id='your-home'>Airbnb your home</button></div>
          <div className='language '>
            <button className='plant'>
              <img src="/images/plant.png" alt="plant img" />
            </button>
          </div>

          <div className='login'>
            <button onClick={() => { setOpen(!open) }}>
              <img src="/images/login.png" alt="login img" />
            </button>

          </div>
        </div>

      </div>
      <div className={`dropdown-menu ${open ? `active` : `inactive`}`}>


        {/* <DropdownItem /> */}
        <div className='drop'>
          <div className='dropdownItem'>
            <button><b>Sing up</b></button><br />
            <button> Log in</button>
            <p style={{ width: "100%", color: "rgb(189, 185, 185)", padding: "0" }}>
              ___________________________________</p>

            <button>Gift cards</button><br />
            <button>Airbnb your home</button>
            <button>Help Center</button>
            {/* <img src={props.img} alt="" ></img>
      <a href="">{props.text}</a> */}

          </div>
        </div>
      </div>
    </>
  )
}
// function DropdownItem() {
//   return (<> <div className='drop'>
//   <div className='dropdownItem'>
//   <button><b>Sing up</b></button><br />
//   <button> Log in</button>
//   <p style={{width:"100%", color:"rgb(189, 185, 185)", padding: "0"}}>
//     ___________________________________</p>

// <button>Gift cards</button><br />
// <button>Airbnb your home</button>
// <button>Help Center</button>
//       {/* <img src={props.img} alt="" ></img>
//       <a href="">{props.text}</a> */}

//     </div>
//     </div>
//   </>)
// }
//-----------language icon---------------------
function spracheItem() {
  return (
    <>
      <div>
        <header>
          <div><button>Language and region</button></div>
          <div><button>currency</button></div>
        </header>
        <div className='translate'><h3>Translation</h3><br /><p>Automatically translate description and reviews to English.</p></div>
        <div className='translate-button'></div>
        <div>
          <h1><b>Suggested </b></h1>
        </div>
      </div>
    </>
  )
}
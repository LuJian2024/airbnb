import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import "../../css/header1.css"
export default function Header1() {
  const[open, setOpen] = useState(false);
  const [login, setLogin]= useState(false);
  return (
    <>
    <div className='header1'>
      <div className='airbnb'>
        <img className='air-logo' src="/images/airbnb.png" alt="airbnb-logo" /></div>
      <div className='air'>
        <div className='stay'><button><b>Stays</b></button></div>
        <div className='Experiences'><button>Experiences</button></div>
      </div>
      <div className='air'>
        <div className='air'><button id='your-home'>Airbnb your home</button></div>
        <div className='language '><button className='plant'><img src="/images/plant.png" alt="plant img" /></button></div>

        <div className='login'>
        <button onClick={()=>{setOpen(!open)}}>
            <img src="/images/login.png" alt="login img" /></button>
         
        </div>
      </div>

    </div><div className={`dropdown-menu ${open? `active` : `inactive`}`}>
            
            
            {/* <DropdownItem /> */}
            <div className='drop'>
  <div className='dropdownItem'>
  <button onClick={()=>{setLogin(!login) }}><b>Sing up</b></button><br />
  <button onClick={()=>{setLogin(!login)}}> Log in</button>
  <p style={{ color:"rgb(189, 185, 185)", padding: "0"}}>
    ___________________________________</p>
    
  <button>Gift cards</button><br />
  <button>Airbnb your home</button>
  <button>Help Center</button>
    </div>
    </div>
          </div>
          <div className={`sing-up-menu ${login? `an` : `off`}`}>
            <SingUp />
          </div>
          {/* <SpracheItem /> */}
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
//     </div>
//     </div>
//   </>)
// }
//-----------language icon---------------------
function SpracheItem (){
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
//-----Sing Up------------------------------
function SingUp (){
  return(
    <><div className='sing-up-body'>
      <header>
        <button className='close' ><FontAwesomeIcon icon={faXmark} /></button>
        <h3>Log In or sing up</h3>
      </header>
      <p style={{color:"rgb(189, 185, 185)"}}>_____________________________________________________________________________</p>
    <div className='input-body'>
    <h1 style={{padding:"10px"
    }}>Welcome to Airbnb</h1>
    <input type="text" placeholder='Country code' /><br />
    <input type="text" placeholder='Phone number' />
    <p style={{color:"rgb(183, 174, 174)"}}>We'll call or text you to confirm your number.Standard message and data rates apply. <a href="">Privacy Policy</a> </p>
    <button style={{color:"white",backgroundColor:"red",
    borderRadius:"5px",border:"1px solid red",cursor:"pointer",width:"100%",padding:"17px"
    }}> <b> Continue</b></button>
    <p>____________________________________ or
       _____________________________________</p><br />
       <button className='continue-button'><b><a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F">Continue with Facebook</a> </b></button><br />
       <button className='continue-button'><b><a href="https://support.google.com/accounts/answer/27441?hl=en">Continue with Google</a> </b></button><br />
       <button className='continue-button'><b> <a href="https://support.apple.com/apple-id">Continue with Apple</a> </b></button><br />
       <button className='continue-button'><b><a href="https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook">Continue with email</a> </b></button>
    
       
    </div>
    </div>
    </>
  )

}
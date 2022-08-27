import React,{useState} from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'
import './Header.css'




const Header = () => {
  const mobile=window.innerWidth<=768?true:false;
  const [menuOpened,setMenuOpened]=useState(false);

  return (
    <div className="header">
      <img src={Logo} className='logo' alt='Logo' />
      {menuOpened===false&&mobile===true?(
        <div  
           style={{backgroundColor:'var(--appColor)',
           padding:'0.5rem',
           borderRadius:'5px',
           width:'1.5rem',
           height:'1.5rem'
           }}
           onClick={()=>{setMenuOpened(!menuOpened)}}>
           <img src={Bars} alt="Bars" style={{width:'1.5rem',height:'1.5rem'}} />
        </div>
      ):
      <ul className='header-menu'>
          <li>
            <Link 
            onClick={()=>{setMenuOpened(false)}}
            activeClass="active"
            smooth={true} span="true" to='home'>
            Home</Link>
          </li>
          <li>
            <Link 
            onClick={()=>{setMenuOpened(false)}}
            smooth={true} span="true" to='programs'>Programs</Link>
          </li>
          <li>
            <Link 
            onClick={()=>{setMenuOpened(false)}}
            smooth={true} span="true" to='reasons'>Why us</Link>
          </li>
          <li>
            <Link 
            onClick={()=>{setMenuOpened(false)}}
            smooth={true} span="true" to='plans'>Plans</Link>
          </li>
          <li>
            <Link 
            onClick={()=>{setMenuOpened(false)}}
            smooth={true} span="true" to='Testimonials'>Testimonials</Link>
          </li>
      </ul>
      }
    
    </div>
  )
}

export default Header
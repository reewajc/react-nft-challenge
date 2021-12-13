import React from 'react'
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png'
import themeIcon from '../assets/header/theme-switch.png'

function Header() {
    return (
        <div className='header'>
           <div className='logoContainer'>
               <img src={punkLogo} className='PunkLogo' alt=''/>
           </div>
           <div className='searchBar'>
               <div className='searchIconContainer'>
               <img src={searchIcon} />
               </div>
               <input className='searchInput' type='text' placeholder='Collection, item or user...'/>
           </div>
           <div className='headerItems'> 
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
           </div>

           <div className='headerActions'>
               <div className='themeSwitchContainer'> 
               <img src={themeIcon} />
               </div>

            </div>

            <div className='loginButton'>Get In</div>
           
        </div>
    )
}

export default Header

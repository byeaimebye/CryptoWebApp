import React from 'react';
import logo from '../assets/celerilogo.png';
import logout from '../assets/logout.png'
import {Link} from 'react-router-dom';



function TopNavData({coinsData, deleteUser}) {
    return (
           <div className="topNavD">
            <section className="topLogoGrid">
            <Link style={{display:"flex", textDecoration:"none", alignItems:"center", color:"black"}} to="/">
            <img className="imgLogoTop" src={logo} alt="logoTop" />
            <h3 className="textTopLogo">celeri</h3>
            </Link>
            </section>
            <section className="marqueeTop">
            
                    
            <marquee behavior="" direction="" >{coinsData.map(coin => <span > {<img src={coin.image} style={{width:"20px"}}></img>} {coin.market_cap_rank} {coin.name} {coin.current_price} {coin.market_cap}</span> )}</marquee>
           
           <button
           style={{backgroundColor:"transparent", border:"none"}}
           key="user"
           onClick={deleteUser}> <img src={logout} alt=""  style={{width:"20px"}}/> </button>
            </section>
        </div>
    )
}

export default TopNavData

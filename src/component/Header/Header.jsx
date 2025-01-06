import React from 'react'
import './header.css'
import logo from '../../assets/images/eco-logo.png'

import {NavLink} from 'react-router-dom';
import userIcon from '../../assets/images/user-icon.png'
import {motion} from 'framer-motion';

import {Container, Row} from 'reactstrap';

const Nav__Link = [
  {
    path:"Home",
    display:'Home'
  },
  {
    path:"Shop",
    display:'Shop'
  },
  {
    path:"Cart",
    display:'Cart'
  }
]

const Header = () => {
  return <header className='header'>
    <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={logo} alt="logo"/>
              <div className='title'>
                <h1>Furtinoz</h1>
              </div>
            </div>

               <div className='navigation'>
                 <ul className='menu'>
                  
                  {
                    Nav__Link.map((item,index)=>(
                      <li className='nav__item' key={index}>
                        <NavLink to={item.path}className={(navClass)=>navClass.isActive ?'nav__active':''}>{item.display}</NavLink>
                    </li>
                    ))
                  }

                 </ul>
               </div>

              <div className='nav__icons'> 
                <span className='fav_icon'>
                  <i class="ri-heart-line"></i>
                  <span className='badge'>1</span>
                </span>
                <span className="cart_icon">
                  <i class="ri-shopping-bag-line"></i>
                  <span className='badge'>2</span>
                </span>    
                <span>
                  <motion.img whileTap={{scale:1.2}} src={userIcon} alt=''/> 
                </span>
                <div className='mobile__menu'>
                 <span>
                  <i class="ri-menu-line"></i>
                 </span>
                </div>

              </div>
          </div>
        </Row>
    </Container>
  </header>
}

export default Header

import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebar-data';
import { getUserRole } from '../api/api';
import './nav-bar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState('');

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    let userName;
    async function fetchData() {
      userName = await getUserRole();
        setUser(userName);
    }
    fetchData();
  }, []);
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="user" style={{width :'80px', marginRight: '1%'}}>
            <div style={{width :'30px', float:'left'}} >
            <FaIcons.FaUser />
            </div>
            <div style={{width :'50px', float:'right', color: 'white'}} >
            {user}
            </div>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
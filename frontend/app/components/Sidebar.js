"use client"
import { useState } from 'react';
import styles from './Sidebar.module.css';  // Importing the styles
import Link from 'next/link';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);  // State to track sidebar open/close
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={isOpen ? styles.sidebarOpen : styles.sidebarClosed}>
        <button className={styles.toggleBtn} onClick={toggleSidebar}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        <nav className={styles.nav}>
          <ul>
            <li className='px-4'>
              <Link href="/">
                {isOpen ? 'Home' : <i className="fas fa-home"></i>} {/* Icon or Text */}
              </Link>
            </li>
            <li className='pt-4 px-4'>
              <Link href="/patient">
                {isOpen ? 'Patient' : <i className="fas fa-user"></i>} {/* Icon or Text */}
              </Link>
            </li>
            <li className='pt-4 px-4'>
              <Link href="#">
                {isOpen ? 'About' : <i className="fas fa-info-circle"></i>} {/* Icon or Text */}
              </Link>
            </li>
            <li className='pt-4 px-4'>
              <Link href="#">
                {isOpen ? 'Services' : <i className="fas fa-cogs"></i>} {/* Icon or Text */}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
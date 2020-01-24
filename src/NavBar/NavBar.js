import React from 'react'; 
import logo from '../assets/beer-glass.png'; 
import styles from './NavBar.module.css'; 
import { SearchBar } from '../SearchBar/SearchBar';

export function NavBar() {
    return  (
        <div className={styles['nav-bar']}>
            <img src={logo} className={styles['logo']} alt='logo'/>
            <SearchBar small/>
            <button className={styles['nav-button']}>Sign In</button>
            <button className={styles['nav-button']}>Register</button>
        </div>
    ); 
}
import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/beer-glass.png'; 
import styles from './LandingPage.module.css'; 
import { SearchBar } from '../SearchBar/SearchBar'; 
import { SearchSuggestions } from './TopNav/SearchSuggestions/SearchSuggestions';

export function LandingPage() {
	return (
		<div className={styles['landing']}>
			<div className={styles['search-area']}>
				<TopNav/>
				<img src={logo} className={styles['logo']} alt='logo'/>
				<SearchBar/>
				<SearchSuggestions/>
			</div>
		</div>
	); 
}
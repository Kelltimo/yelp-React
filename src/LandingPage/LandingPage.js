import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/beer-glass.png'; 
import './LandingPage.module.css'; 
import { SearchBar } from '../SearchBar/SearchBar'; 
import { SearchSuggestions } from './TopNav/SearchSuggestions/SearchSuggestions';

export function LandingPage() {
	return (
		<div className={'landing'}>
			<div className={'search-area'}>
				<TopNav/>
				<img src={logo} className='logo' alt='logo'/>
				<SearchBar/>
				<SearchSuggestions/>
			</div>
		</div>
		); 
}
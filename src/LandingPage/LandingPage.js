import React from 'react';
import { TopNav } from './TopNav/TopNav';
import logo from '../assets/beer-glass.png'; 
import './LandingPage.module.css'

export function LandingPage() {
	return (
		<div>
			<TopNav/>
			<img src={logo} className='logo' alt='logo'/>
		</div>
		); 
}
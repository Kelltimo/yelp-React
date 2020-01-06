import React from 'react'; 
import classes from './SearchBar.module.css'; 

export function SearchBar() {
	return (
		<div>
			<div className="field has-addons">
  				<p className="control">
    				<button className="button is-static is-medium">Search</button>
  				</p>
  				<p className="control">
    				<input className={`input is-medium ${classes['input-control']}`} type="text" placeholder="beers, breweries"/>
  				</p>
  				<p className="control">
    				<button className="button is-static is-medium">NEAR</button>
  				</p>
  				<p className="control">
    				<input className={`input is-medium ${classes['input-control']}`} type="text" placeholder="Where"/>
  				</p>
  				<div className={`button is-medium ${classes['search-button']}`}>
    				<span className="icon is-small"><i className="fas fa-search"></i></span>
  				</div>
			</div>
		</div>
		); 
}

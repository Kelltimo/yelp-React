import React from 'react'; 
import styles from './SearchSuggestions.modules.css'; 

export function SearchSuggestions() {
    return (
        <div className={styles['suggestions']}>
            <span className="icon is-small"><i className="fas fa-utensils"></i></span><span className={styles['suggestion']}>Breweries</span>
            <span className="icon is-small"><i className="fas fa-beer"></i></span><span className={styles['suggestion']}>Beers</span>
        </div>
    )
}
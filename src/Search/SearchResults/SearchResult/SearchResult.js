import React from 'react';
import styles from './SearchResult.module.css';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';

export function SearchResult() {
    return (
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/210' alt='business image' className={styles['business-image']} />
            <div className={styles['business-info']}>
                <h2 className="subtitle">Wilderness Brewery  </h2>
                <BusinessRating/>
                <p>$$ <span className="tag">Burgers</span> <span className="tag">American</span></p>
            </div>
            <div className={styles['contact-info']}>
                <p>123-345-5678</p>
                <p>Example Street 5</p>
                <p>12345 Phoenix</p>
            </div>

        </div>
    )
}
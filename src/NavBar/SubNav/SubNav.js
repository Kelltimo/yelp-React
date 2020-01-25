import React from 'react';
import { SubNavItem } from './SubNavItem/SubNavItem';
import styles from './SubNav.module.css';

export function SubNav() {
    return (
        <div className={styles['container']}>
            <div className={styles['sub-nav']}>
                <div>
                    <SubNavItem label='Brewery' icon='fa-utensils' />
                    <SubNavItem label='Beer' icon='fa-beer' showRightBorder />
                </div>
                <div>
                    <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
                        <span className="icon">
                            <span className="fas fa-pen"></span>
                        </span>
                        <span>Write a Review</span>
                    </button>
                    <button className={`button ${styles['subnav-button']}`}>
                        <span className="icon">
                            <span className="fas fa-hotel"></span>
                        </span>
                        <span>For Businesses</span>
                    </button>
                </div>
            </div>
        </div>

    );
}
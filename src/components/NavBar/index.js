import React from 'react';
import styles from './index.module.css'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    let NavItems = props.navLinks.map((item) => {
        return(
            <li className={styles.item}>
                <NavLink to={item.to} activeClassName={styles.active}>{item.name}</NavLink>
            </li>
        )
    })

    return (
        <aside className={styles.navBar}>
            <ul>
                {NavItems}
            </ul>
        </aside>
    )
}
export default NavBar;
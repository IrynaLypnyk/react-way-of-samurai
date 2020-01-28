import React from 'react';
import styles from './index.module.css'
import {NavLink} from "react-router-dom";


const NavBar = ({state}) => {

    return (
        <aside className={styles.navBar}>
            <ul>
                {state.map((item) => {
                    return(
                        <li className={styles.item}>
                            <NavLink to={item.to} activeClassName={styles.active}>{item.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
export default NavBar;
import React from 'react'

import {NavLink} from 'react-router-dom'
import classes from './NavigationItem.module.css'

const navigationItem = (props) => (
    <ul className={classes.NavigationItem}>
        <li>
            <NavLink
                to={props.link}
                exact={props.exact}
                activeClassName={classes.active}>{props.children}</NavLink>
        </li>
    </ul>

);

export default navigationItem;

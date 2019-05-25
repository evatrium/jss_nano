import React from 'react';
import {withClasses} from "../theme";

export const Nav = withClasses(({color, mixins}) => ({
    root: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        background: color.primary,
        flexShrink: 0,
        ...mixins.nav,
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        padding: '0 20px'
    }
}))(({classes, children, ...rest}) => (
    <nav className={classes.root} {...rest}>
        {children}
    </nav>
));
import {createElement} from 'react';
import {jss_nano} from "./index";

export const ThemedClasses = (theme, cn)=>{
    const theme_ = theme;
    return (styles)=>{
        const classes = jss_nano(typeof styles === 'function' ? styles(theme_): styles);
        return (Child)=>{
            if(!Child) return classes;
            return (props)=> createElement(Child, {...Child.props, ...props, classes, cn})
        }
    }
};
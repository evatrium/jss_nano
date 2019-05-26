import {createElement} from 'react';

export const ThemedClasses = (theme, jssInstance, cn)=>{
    const theme_ = theme;
    return (styles)=>{
        const classes = jssInstance(typeof styles === 'function' ? styles(theme_): styles);
        return (Child)=>{
            if(!Child) return classes;
            return (props)=> createElement(Child, {...Child.props, ...props, classes, cn})
        }
    }
};
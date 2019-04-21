import {supportedProperty as sp, supportedValue as sv} from 'css-vendor';
import {isUnitlessNumber} from "./isUnitlessNumber";


export const JSS_nano = (dev) => {

    let rules = [];

    let cache = {};

    const d = document;

    const noAnd = s => s.replace(/&/g, '');

    let insert = rule => rules.push(rule);

    const hyph = s => s.replace(/[A-Z]|^ms/g, '-$&').toLowerCase();

    const mx = (rule, media) => media ? `${media}{${rule}}` : rule;


    const addPx = (prop, val) =>
        typeof val === 'number' && val !== 0 && !(isUnitlessNumber.hasOwnProperty(prop) && isUnitlessNumber[prop])
            ? val + 'px' : val;


    const prefixAndAddPx = (cn, p, val) => {

        let prop = hyph(p);

        let _sp = sp(prop);

        let val_ = addPx(p, val);

        return `.${cn}{${_sp || prop}:${sv(_sp, val_) || val_}}`;
        // return `.${cn}{${prop}:${val}}`;
    };

    const parse = (obj, child = '', media) =>
        Object.keys(obj).map(key => {

            const val = obj[key];

            if (val === null) return '';

            if (typeof val === 'object') {
                const m2 = /^@/.test(key) ? key : null;
                return parse(val, m2 ? child : child + key, m2 || media)
            }

            const _key = key + val + child + media;

            if (cache[_key]) return cache[_key];

            let cn = 'x' + (rules.length).toString(36);

            let prefixedAndPxed = prefixAndAddPx(cn + noAnd(child), key, val);

            insert(mx(prefixedAndPxed, media));

            cache[_key] = cn;

            return cn;

        }).join(' ');

    let styleElement = d.createElement('style');

    styleElement.appendChild(d.createTextNode(""));
    styleElement.setAttribute('id', 'jss-nano');
    d.head.appendChild(styleElement);

    const insertFast = rule => {
        rules.push(rule);
        styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
    };


    const insertDevToolsFriendly = rule => {
        rules.push(rule);
        styleElement.appendChild(d.createTextNode(rule))
    };


    insert = dev ? insertDevToolsFriendly : insertFast;


    const jssToCss_ = (...styles) => {
        return styles.map(style => parse(style))
            .join(' ').trim()
    };


    return (jssClasses = {}) => {
        let cssClasses = {};
        Object.keys(jssClasses).forEach((key) => {
            cssClasses[key] = jssToCss_(jssClasses[key]);
        });
        return cssClasses;
    };


};

export default JSS_nano;



// export const ornament = Ornament({dev: false});
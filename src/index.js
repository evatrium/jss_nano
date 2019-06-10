import {prefixPV} from "./prefixPV";
export {cn} from "./classNames";

let rules = [],

    cache = {},

    d = document,

    noAnd = s => s.replace(/&/g, ''),

    insert = rule => rules.push(rule),

    mx = (rule, media) => media ? `${media}{${rule}}` : rule;


let prefixAndMakeRule = (cn, p, v) => {
    let prefixed = prefixPV(p,v);
    return `.${cn}{${prefixed.property}:${prefixed.value}}`;
};


let parse = (obj, child = '', media) =>
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

        let rule = prefixAndMakeRule(cn + noAnd(child), key, val);

        insert(mx(rule, media));

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

insert = process.env.NODE_ENV === 'development' ? insertDevToolsFriendly : insertFast;

const jssToCss_ = (...styles) => {
    return styles.map(style => parse(style))
        .join(' ').trim()
};

export const getCss = () => rules.sort().join('');

export const jss_nano = (jssClasses = {}) => {
    let cssClasses = {};
    Object.keys(jssClasses).forEach((key) => {
        cssClasses[key] = jssToCss_(jssClasses[key]);
    });
    return cssClasses;
};

export default jss_nano;

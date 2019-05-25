import {supportedProperty as sp, supportedValue as sv} from "css-vendor";
import {isUnitlessNumber} from "./isUnitlessNumber";

export const hyph = s => s.replace(/[A-Z]|^ms/g, '-$&').toLowerCase();

export const addPx = (prop, val) => typeof val === 'number'
&& val !== 0 && !(isUnitlessNumber.hasOwnProperty(prop) && isUnitlessNumber[prop])
    ? val + 'px' : val;


export const prefixPV = (p, v) => {

    let prop_ = hyph(p);

    let _sp = sp(prop_);

    let val_ = addPx(p, v);

    return {
        property: _sp || prop_,
        value: sv(_sp, val_) || val_
    }
};
